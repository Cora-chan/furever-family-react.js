import { App, Stack, CfnOutput, RemovalPolicy } from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'

import getConfig from './get-config'
import { AutoDeleteBucket } from '@mobileposse/auto-delete-bucket'
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment'
import * as route53 from '@aws-cdk/aws-route53'
import * as targets from '@aws-cdk/aws-route53-targets'
import { CloudFrontWebDistribution, SSLMethod, SecurityPolicyProtocol, LambdaFunctionAssociation } from '@aws-cdk/aws-cloudfront'
import { DnsValidatedCertificate } from '@aws-cdk/aws-certificatemanager'
import { StackProps } from './types'
import handlers from './handlers.json'

const lambdaConfigGenerator = (handlerFn: string): lambda.FunctionProps => ({
  runtime: lambda.Runtime.NODEJS_12_X,
  tracing: lambda.Tracing.ACTIVE,
  code: new lambda.AssetCode('./cdk/build'),
  handler: handlerFn,
  memorySize: 512,
})

export class FrontStack extends Stack {
  constructor(app: App, id: string, props: StackProps) {
    super(app, id, { env: props.env });

    const rootDnsName = props.rootDomain
    const dnsName = `${props.sitePrefix}${props.prefix}.${rootDnsName}`
    const bucketName = dnsName.split('.').reverse().join('.')

    // S3 public website in Virginia
    const websiteBucket = new AutoDeleteBucket(this, 'website-bucket', {
      versioned: false,
      bucketName: bucketName,
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY
    })

    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: rootDnsName,
      privateZone: false,
    })

    // Cert
    const certificateArn = new DnsValidatedCertificate(this, 'Certificate', {
      domainName: dnsName,
      hostedZone,
    }).certificateArn

    // Header lambda
    const addHeadersLambda = props.branchName==='master' ? new lambda.Function(
      this,
      'addHeadersLambda',
      {
        ...lambdaConfigGenerator(handlers.addHeaders),
      }
    ) : null

    // Cloudfront
    const cloudfrontName = dnsName.replace(/[^-0-9a-zA-Z]/g, '-')

    const distribution = new CloudFrontWebDistribution(this, cloudfrontName, {
      aliasConfiguration: {
        acmCertRef: certificateArn,
        names: [ dnsName ],
        sslMethod: SSLMethod.SNI,
        securityPolicy: SecurityPolicyProtocol.TLS_V1_2_2018,
      },
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: websiteBucket
          },
          behaviors : [ {
            isDefaultBehavior: true,
            lambdaFunctionAssociations: addHeadersLambda ? [{
              eventType: 'origin-response',
              lambdaFunction: addHeadersLambda?.currentVersion
            } as LambdaFunctionAssociation] : []
          }]
          }
      ],
    })

    // Domain name
    new route53.ARecord(this, 'Alias', {
      zone: hostedZone,
      recordName: dnsName,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution))
    })

    // Cloudwatch logs
    // TODO

    new BucketDeployment(this, 'DeployWebsite', {
      sources: [Source.asset('./build')],
      destinationBucket: websiteBucket,
      distribution,
      distributionPaths: ['/*']
    })

    new CfnOutput(this, 'CloudFrontArn', {
        exportName: `cloudfront-${cloudfrontName}`,
        value: distribution.distributionId
      }
    )
    new CfnOutput(this, 'SiteUrl', {
        exportName: `site-${cloudfrontName}`,
        value: `https://${dnsName}`
      }
    )
  }
}

const { APP_NAME, DOMAIN_PREFIX, ROOT_DOMAIN, BRANCH, STAGE, LOG_LEVEL } = getConfig([
  'APP_NAME',
  'DOMAIN_PREFIX',
  'ROOT_DOMAIN',
  'BRANCH',
  'STAGE',
  'LOG_LEVEL'
])

let stackName = `${BRANCH}-${APP_NAME}`
if (BRANCH !== 'master' && BRANCH !== STAGE) {
  stackName = `${STAGE}-${BRANCH}-${APP_NAME}`
}

const app = new App()

new FrontStack(app, stackName, {
  branchName: BRANCH,
  stage: STAGE,
  sitePrefix: DOMAIN_PREFIX,
  rootDomain: ROOT_DOMAIN,
  stackName,
  prefix: BRANCH==='master' ? '': BRANCH === STAGE ? `${BRANCH}` : `-${BRANCH}-${STAGE}`,
  logLevel: LOG_LEVEL,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
})

app.synth()

import { CloudFrontResponseHandler } from 'aws-lambda'

const handler: CloudFrontResponseHandler = async  ({
  Records: [
    { cf: {
      response
    }}
  ]
                                                   }) => {
  console.log('Event: ', response);
  //Get contents of response
  const headers = response.headers

//Set new headers
  headers['strict-transport-security'] = [{key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubdomains; preload'}]
  headers['content-security-policy'] = [{key: 'Content-Security-Policy', value: "default-src 'self' *.myfurever.family *.googleapis.com myfureverfamily.auth0.com; img-src 'self'; script-src 'unsafe-inline' 'self'; style-src 'self' 'unsafe-inline' *.googleapis.com; font-src fonts.gstatic.com; object-src 'none'"}]
  headers['x-content-type-options'] = [{key: 'X-Content-Type-Options', value: 'nosniff'}]
  headers['x-frame-options'] = [{key: 'X-Frame-Options', value: 'DENY'}]
  headers['x-xss-protection'] = [{key: 'X-XSS-Protection', value: '1; mode=block'}]
  headers['referrer-policy'] = [{key: 'Referrer-Policy', value: 'same-origin'}]

  //Return modified response
  return response
}

export default handler

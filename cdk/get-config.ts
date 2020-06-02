interface Config {
  APP_NAME: string
  DOMAIN_PREFIX: string
  ROOT_DOMAIN: string
  STAGE: string
  BRANCH: string
  LOG_LEVEL: string
}

export default (envs: string[] = []): Config => {
  return envs.reduce((acc, envVarKey) => {
    const envVarValue = process.env[envVarKey];
    if (!envVarValue) {
      throw new Error(`Required environment variable is not set: ${envVarKey}`)
    }

    return { ...acc, [envVarKey]: envVarValue }
  }, {}) as Config
}

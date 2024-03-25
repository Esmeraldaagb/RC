export const env = {
  isProd: process.env.NODE_ENV === "production",
  port: Number(process.env.PORT || 3030),
  allowRegister: checkEnvTrusty(process.env.ALLOW_REGISTER),
  allowOpenapi: checkEnvTrusty(process.env.ALLOW_OPENAPI) || true,
  allowPlayground: checkEnvTrusty(process.env.ALLOW_PLAYGROUND) || true,
  dbDebug: checkEnvTrusty(process.env.DB_DEBUG),
  firebase: {
    type: process.env.FIREBASE_TYPE,
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    clientId: process.env.FIREBASE_CLIENT_ID,
    authUri: process.env.FIREBASE_AUTH_URI,
    tokenUri: process.env.FIREBASE_TOKEN_URI,
    authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    clientC509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  },
};

export function checkEnvTrusty(env: string | undefined): boolean {
  return env === "1" || env === "true";
}

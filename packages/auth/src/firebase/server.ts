/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Import the functions you need from the SDKs you need
import * as firebase from "firebase-admin";

import "dotenv/config";

export class FirebaseService {
  private readonly firebaseApp: firebase.app.App;

  private firebaseConfig = {
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
  } as const;

  private actionCodeSettings = {
    url: process.env.FIREBASE_REDIRECT_URL,
    handleCodeInApp: true,
  } as const;

  constructor() {
    // only initialize if not already initialized
    if (!firebase.apps.length) {
      this.firebaseApp = firebase.initializeApp({
        credential: firebase.credential.cert(this.firebaseConfig),
      });
    } else {
      this.firebaseApp = firebase.app();
    }
  }

  async verifyIdToken(token: string) {
    return await this.firebaseApp.auth().verifyIdToken(token);
  }

  async users(): Promise<any> {
    return await this.firebaseApp.auth().listUsers();
  }

  async signInWithCustomToken(token: string) {
    return await this.firebaseApp.auth().getUser(token);
  }

  async setRole(uid: string, role: string) {
    return await this.firebaseApp
      .auth()
      .setCustomUserClaims(uid, { role })
      .then(() => {
        return { success: true };
      })
      .catch((error) => {
        return { error, success: false };
      });
  }

  async findUser(email: string) {
    return await this.firebaseApp
      .auth()
      .getUserByEmail(email)
      .then((user) => {
        return { user, success: true };
      })
      .catch((error) => {
        return { error, success: false };
      });
  }

  async findUserByUid(uid: string) {
    return await this.firebaseApp
      .auth()
      .getUser(uid)
      .then((user) => {
        return { user, success: true };
      })
      .catch((error) => {
        return { error, success: false };
      });
  }

  async findUserByEmail(email: string) {
    return await this.firebaseApp
      .auth()
      .getUserByEmail(email)
      .then((user) => {
        return { user, success: true };
      })
      .catch((error) => {
        return { error, success: false };
      });
  }

  async updateUser(uid: string, user: any) {
    return await this.firebaseApp.auth().updateUser(uid, user);
  }

  deleteUseAccount(uid: string) {
    return this.firebaseApp
      .auth()
      .deleteUser(uid)
      .then((response) => {
        return {
          success: true,
          response,
        };
      })
      .catch((error) => {
        return { error, success: false };
      });
  }

  createUser(data: any) {
    return this.firebaseApp
      .auth()
      .createUser(data)
      .then((user) => {
        return { user, success: true };
      })
      .catch((error) => {
        return { error, success: false };
      });
  }

  createUserAndReturnToken(data: any) {
    return this.firebaseApp
      .auth()
      .createUser(data)
      .then((user) => {
        return user;
      })
      .catch((error) => {
        return { error, success: false };
      });
  }

  createCustomToken(uid: string) {
    return this.firebaseApp
      .auth()
      .createCustomToken(uid)
      .then((customToken) => {
        return { customToken, success: true };
      })
      .catch((error) => {
        return { error, success: false };
      });
  }
}

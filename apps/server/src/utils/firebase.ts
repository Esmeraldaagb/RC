/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Import the functions you need from the SDKs you need
import * as firebase from "firebase-admin";

import { env } from "./env";

export class FirebaseService {
  private readonly firebaseApp: firebase.app.App;

  private firebaseConfig = {
    type: env.firebase.type,
    projectId: env.firebase.projectId,
    privateKeyId: env.firebase.privateKeyId,
    privateKey: env.firebase.privateKey?.replace(/\\n/g, "\n"),
    clientEmail: env.firebase.clientEmail,
    clientId: env.firebase.clientId,
    authUri: env.firebase.authUri,
    tokenUri: env.firebase.tokenUri,
    authProviderX509CertUrl: env.firebase.authProviderX509CertUrl,
    clientC509CertUrl: env.firebase.clientC509CertUrl,
  };

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
      .catch((error: any) => {
        return { error, success: false };
      });
  }

  async findUser(email: string) {
    return await this.firebaseApp
      .auth()
      .getUserByEmail(email)
      .then((user: any) => {
        return { user, success: true };
      })
      .catch((error: any) => {
        return { error, success: false };
      });
  }

  async findUserByUid(uid: string) {
    return await this.firebaseApp
      .auth()
      .getUser(uid)
      .then((user: any) => {
        return { user, success: true };
      })
      .catch((error: any) => {
        return { error, success: false };
      });
  }

  async findUserByEmail(email: string) {
    return await this.firebaseApp
      .auth()
      .getUserByEmail(email)
      .then((user: any) => {
        return { user, success: true };
      })
      .catch((error: any) => {
        return { error, success: false };
      });
  }

  async updateUser(uid: string, user: any) {
    return await this.firebaseApp
      .auth()
      .updateUser(uid, user)
      .then((userRecord: any) => {
        return { userRecord, success: true };
      });
  }

  async deleteUserAccount(uid: string) {
    return this.firebaseApp
      .auth()
      .deleteUser(uid)
      .then((response: any) => {
        return {
          success: true,
          response,
        };
      })
      .catch((error: any) => {
        return { error, success: false };
      });
  }

  async createUser(data: any) {
    return this.firebaseApp
      .auth()
      .createUser(data)
      .then((user: any) => {
        return { user, success: true };
      })
      .catch((error: any) => {
        return { error, success: false };
      });
  }

  createUserAndReturnToken(data: any) {
    return this.firebaseApp
      .auth()
      .createUser(data)
      .then((user: any) => {
        return user;
      })
      .catch((error: any) => {
        return { error, success: false };
      });
  }

  createCustomToken(uid: string) {
    return this.firebaseApp
      .auth()
      .createCustomToken(uid)
      .then((customToken: any) => {
        return { customToken, success: true };
      })
      .catch((error: any) => {
        return { error, success: false };
      });
  }
}

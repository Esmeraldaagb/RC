import { logger } from "@api/infra/logger";
import { userRepository } from "@api/infra/repositories";
import { FirebaseService } from "@api/utils/firebase";
import * as trpc from "@trpc/server";
import { inferAsyncReturnType } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

// get user from prisma

const firebaseService = new FirebaseService();
export async function createContext({ req, res }: CreateExpressContextOptions) {
  async function getUserFromHeader() {
    if (req.headers.authorization) {
      const token: string = req.headers.authorization;

      try {
        logger.info("Verifying token", { token });

        //let check token expiration
        const s = await firebaseService.verifyIdToken(token);
        if (s.exp * 1000 < Date.now()) {
          logger.error("Token expired", { token });
          return {
            code: "AUTH_TOKEN_EXPIRED",
          };
        }

        const user = await firebaseService.signInWithCustomToken(token);

        return user;
      } catch (err) {
        logger.error("Error verifying token", err);
        return null;
      }
    }
    return null;
  }

  const user = (await getUserFromHeader()) as any;
  // set user role from database
  if (user) {
    const userFromDb = (await userRepository.getUserByFirebaseId(
      user.uid,
    )) as any;
    user.role = userFromDb.role;
    user.id = userFromDb.id;
  }

  return {};
}
export type Context = inferAsyncReturnType<typeof createContext>;

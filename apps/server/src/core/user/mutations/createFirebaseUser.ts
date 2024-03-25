import { logger } from "@api/infra/logger";
import { UserRepository } from "@api/infra/repositories";
import { z } from "zod";

import { CreateUserSchema } from "../dtos/user";

const userRepository = new UserRepository();

export const createUserEmailAndPassword = async (opts: any) => {
  const { ctx, input } = opts;
  try {
    const user = await userRepository.createUserWithEmailAndPassword(
      input as typeof CreateUserSchema,
    );
    return user;
  } catch (error) {
    logger.error("Error creating user", error);
    throw new Error("Error creating user");
  }
};

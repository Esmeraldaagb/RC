import { logger } from "@api/infra/logger";
import { UserRepository } from "@api/infra/repositories";
import { z } from "zod";

const userRepository = new UserRepository();

export const createUserMutation = async (opts: any) => {
  const { ctx, input } = opts;
  const { email, id, role } = ctx;
  try {
    const user = await userRepository.createUser(input);
    return user;
  } catch (error) {
    logger.error("Error creating user", error);
    throw new Error("Error creating user");
  }
};

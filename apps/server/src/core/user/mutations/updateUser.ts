import { logger } from "@api/infra/logger";
import { UserRepository } from "@api/infra/repositories";
import { z } from "zod";

const userRepository = new UserRepository();

export const updateUserMutation = async (opts: any) => {
  const { ctx, input } = opts;
  try {
    const { id } = ctx;
    const user = await userRepository.updateUser(input);
    return user;
  } catch (error) {
    logger.error("Error updatinng user", error);
    throw new Error("Error updating user");
  }
};

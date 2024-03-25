import { logger } from "@api/infra/logger";
import { UserRepository } from "@api/infra/repositories";
import { z } from "zod";

const userRepository = new UserRepository();

export const deleteUserMutation = async (opts: any) => {
  const { input } = opts;
  try {
    const user = await userRepository.deleteUser(input);
    return user;
  } catch (error) {
    logger.error("Error updatinng user", error);
    throw new Error("Error updating user");
  }
};

import { logger } from "@api/infra/logger";
import { UserRepository } from "@api/infra/repositories";
import { z } from "zod";

const userRepository = new UserRepository();

export const getUserByQuery = async (opts: any) => {
  const { ctx, input } = opts;
  try {
    if (input.email) {
      const user = await userRepository.getUserByEmail(input.email);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } else if (input.id) {
      const user = await userRepository.getUserById(input.id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } else {
      throw new Error("Invalid query");
    }
  } catch (error) {
    logger.error("Error retrieving user", error);
    throw new Error("Error retrieving user");
  }
};

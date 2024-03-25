import { PackageResponseDto } from "@api/core/package/dtos/package";
import { logger } from "@api/infra/logger";
import { PackageRepository } from "@api/infra/repositories";

const packageRepository = new PackageRepository();

export const getPackages = async (opts: any): Promise<any[]> => {
  const { input } = opts;
  try {
    if (input?.userId) {
      const bcPackages = await packageRepository.getUserPackages(input.userId);
      if (!bcPackages) {
        throw new Error("No package found");
      }
      return bcPackages;
    } else {
      const bcPackages = await packageRepository.getAllPackages();
      if (!bcPackages) {
        throw new Error("No package found");
      }
      return bcPackages;
    }
  } catch (error) {
    logger.error("Error retrieving packages", error);
    throw new Error("Error retrieving packages");
  }
};

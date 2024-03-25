import { PackageResponseDto } from "@api/core/package/dtos/package";
import { logger } from "@api/infra/logger";
import { PackageRepository } from "@api/infra/repositories";

const packageRepository = new PackageRepository();

export const createPackageMutation = async (
  opts: any,
): Promise<typeof PackageResponseDto> => {
  const { input } = opts;
  try {
    const bcPackage = await packageRepository.createPackage(input);
    return bcPackage;
  } catch (error) {
    logger.error("Error creating package", error);
    throw new Error("Error creating package");
  }
};

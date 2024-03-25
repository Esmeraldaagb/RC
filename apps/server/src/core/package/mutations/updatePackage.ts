import { PackageResponseDto } from "@api/core/package/dtos/package";
import { logger } from "@api/infra/logger";
import { PackageRepository } from "@api/infra/repositories";

const packageRepository = new PackageRepository();

export const updatePackageMutation = async (
  opts: any,
): Promise<typeof PackageResponseDto> => {
  const { input } = opts;
  try {
    const bcPackage = await packageRepository.updatePackage(input);
    return bcPackage;
  } catch (error) {
    logger.error("Error updatinng package", error);
    throw new Error("Error updating package");
  }
};

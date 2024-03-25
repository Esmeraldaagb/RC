import { PackageResponseDto } from "@api/core/package/dtos/package";
import { logger } from "@api/infra/logger";
import { PackageRepository } from "@api/infra/repositories";

const packageRepository = new PackageRepository();

export const deletePackageMutation = async (
  opts: any,
): Promise<typeof PackageResponseDto> => {
  const { input } = opts;
  try {
    const bcPackage = await packageRepository.deletePackage(input);
    return bcPackage;
  } catch (error) {
    logger.error("Error deleting package", error);
    throw new Error("Error deleting package");
  }
};

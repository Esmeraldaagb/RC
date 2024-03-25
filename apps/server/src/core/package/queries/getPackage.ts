import { PackageResponseDto } from "@api/core/package/dtos/package";
import { logger } from "@api/infra/logger";
import { PackageRepository } from "@api/infra/repositories";

const packageRepository = new PackageRepository();

export const getPackage = async (
  opts: any,
): Promise<typeof PackageResponseDto> => {
  const { input } = opts;
  try {
    if (input?.id) {
      const bcPackage = await packageRepository.getPackageById(input.id);
      if (!bcPackage) {
        throw new Error("Package not found");
      }
      return bcPackage;
    } else if (input?.tracking_number) {
      const bcPackage = await packageRepository.getPackageByTrackingNumber(
        input.tracking_number,
      );
      if (!bcPackage) {
        throw new Error("Package not found");
      }
      return bcPackage;
    } else {
      throw new Error("Invalid query");
    }
  } catch (error) {
    logger.error("Error retrieving package", error);
    throw new Error("Error retrieving package");
  }
};

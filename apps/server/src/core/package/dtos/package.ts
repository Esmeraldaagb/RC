import { PackageModelSchema } from "@api/prisma/zod";
import { z } from "zod";

export const CreatePackageSchema = PackageModelSchema.pick({
  tracking_number: true,
  user_id: true,
  origin: true,
  destination: true,
  warehouse: true,
  content: true,
  total_value: true,
  package_image: true,
  nb_pkgs: true,
  product_type: true,
  userId: true,
});

export const UpdatePackageSchema = PackageModelSchema.partial()
  .omit({ id: true })
  .extend({ id: z.number() });

export const PackageResponseDto = PackageModelSchema;

import { publicProcedure, router } from "@api/trpc";
import { z } from "zod";

import { CreatePackageSchema, UpdatePackageSchema } from "./dtos/package";
import { createPackageMutation } from "./mutations/createPackage";
import { deletePackageMutation } from "./mutations/deletePackage";
import { updatePackageMutation } from "./mutations/updatePackage";
import { getPackage } from "./queries/getPackage";
import { getPackages } from "./queries/getPackages";

export const packageRouter = router({
  createNewPackage: publicProcedure
    .input(CreatePackageSchema)
    .mutation(createPackageMutation),
  updatePackage: publicProcedure
    .input(UpdatePackageSchema)
    .mutation(updatePackageMutation),
  deletePackage: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(deletePackageMutation),
  getPackage: publicProcedure
    .input(
      z.object({
        id: z.number().optional(),
        tracking_number: z.string().optional(),
      }),
    )
    .query(getPackage),
  getPackages: publicProcedure
    .input(z.object({ userId: z.number().optional() }))
    .query(getPackages),
});
export type PackageRouter = typeof packageRouter;

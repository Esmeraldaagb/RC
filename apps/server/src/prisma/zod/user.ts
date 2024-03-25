import * as z from "zod"
import * as imports from "./schemas"
import { CompletePackage, RelatedPackageModelSchema, CompleteLogsActivity, RelatedLogsActivityModelSchema } from "./index"

export const UserModelSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  first_name: z.string().nullish(),
  last_name: z.string().nullish(),
  display_name: z.string().nullish(),
  user_picture: z.string().nullish(),
  device_token: z.string().nullish(),
  firebase_token: z.string().nullish(),
  phone_number: z.string().nullish(),
  country: z.string().nullish(),
  company_identifier_number: z.string().nullish(),
  company_name: z.string().nullish(),
  address_line1: z.string().nullish(),
  address_line2: z.string().nullish(),
  city: z.string().nullish(),
  region: z.string().nullish(),
  roles: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModelSchema> {
  packages: CompletePackage[]
  logs: CompleteLogsActivity[]
}

/**
 * RelatedUserModelSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModelSchema: z.ZodSchema<CompleteUser> = z.lazy(() => UserModelSchema.extend({
  packages: RelatedPackageModelSchema.array(),
  logs: RelatedLogsActivityModelSchema.array(),
}))

import * as z from "zod"
import * as imports from "./schemas"
import { CompleteUser, RelatedUserModelSchema, CompleteTypeProduct, RelatedTypeProductModelSchema, CompleteInvoice, RelatedInvoiceModelSchema } from "./index"

export const PackageModelSchema = z.object({
  id: z.number().int(),
  tracking_number: z.string(),
  origin: z.string(),
  destination: z.string(),
  product_type: z.number().int(),
  new_rate: z.number().nullish(),
  origin_arrival_date: z.date().nullish(),
  destination_arrival_date: z.date().nullish(),
  withdrawal_date: z.date().nullish(),
  material: z.string().nullish(),
  content: z.string(),
  dimension: z.string().nullish(),
  quantity: z.string().nullish(),
  volume: z.string().nullish(),
  capacity: z.string().nullish(),
  model: z.string().nullish(),
  brand: z.string().nullish(),
  total_value: z.number(),
  warehouse: z.string(),
  weight: z.number().nullish(),
  notes: z.string().nullish(),
  package_image: z.string(),
  nb_pkgs: z.number().int(),
  isTracked: z.boolean().nullish(),
  csv_upload_date: z.date().nullish(),
  status: z.string().nullish(),
  date: z.date(),
  userId: z.number().int(),
})

export interface CompletePackage extends z.infer<typeof PackageModelSchema> {
  user: CompleteUser
  type_product: CompleteTypeProduct
  invoice: CompleteInvoice[]
}

/**
 * RelatedPackageModelSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPackageModelSchema: z.ZodSchema<CompletePackage> = z.lazy(() => PackageModelSchema.extend({
  user: RelatedUserModelSchema,
  type_product: RelatedTypeProductModelSchema,
  invoice: RelatedInvoiceModelSchema.array(),
}))

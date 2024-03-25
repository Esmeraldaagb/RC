import * as z from "zod"
import * as imports from "./schemas"
import { CompletePackage, RelatedPackageModelSchema } from "./index"

export const TypeProductModelSchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export interface CompleteTypeProduct extends z.infer<typeof TypeProductModelSchema> {
  package: CompletePackage[]
}

/**
 * RelatedTypeProductModelSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTypeProductModelSchema: z.ZodSchema<CompleteTypeProduct> = z.lazy(() => TypeProductModelSchema.extend({
  package: RelatedPackageModelSchema.array(),
}))

import * as z from "zod"
import * as imports from "./schemas"
import { CompletePackage, RelatedPackageModelSchema } from "./index"

export const InvoiceModelSchema = z.object({
  id: z.number().int(),
  amount: z.number(),
  tax: z.number().nullish(),
  date: z.date(),
})

export interface CompleteInvoice extends z.infer<typeof InvoiceModelSchema> {
  package: CompletePackage[]
}

/**
 * RelatedInvoiceModelSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedInvoiceModelSchema: z.ZodSchema<CompleteInvoice> = z.lazy(() => InvoiceModelSchema.extend({
  package: RelatedPackageModelSchema.array(),
}))

import * as z from "zod"
import * as imports from "./schemas"
import { CompletePaymentMethod, RelatedPaymentMethodModelSchema } from "./index"

export const PaymentModelSchema = z.object({
  id: z.number().int(),
  payment_type_id: z.number().int(),
  amount_paid: z.number(),
  isFullPaid: z.boolean(),
})

export interface CompletePayment extends z.infer<typeof PaymentModelSchema> {
  payment_type: CompletePaymentMethod
}

/**
 * RelatedPaymentModelSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPaymentModelSchema: z.ZodSchema<CompletePayment> = z.lazy(() => PaymentModelSchema.extend({
  payment_type: RelatedPaymentMethodModelSchema,
}))

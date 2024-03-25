import * as z from "zod"
import * as imports from "./schemas"
import { CompleteExpense, RelatedExpenseModelSchema, CompletePayment, RelatedPaymentModelSchema } from "./index"

export const PaymentMethodModelSchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export interface CompletePaymentMethod extends z.infer<typeof PaymentMethodModelSchema> {
  expense: CompleteExpense[]
  payment: CompletePayment[]
}

/**
 * RelatedPaymentMethodModelSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPaymentMethodModelSchema: z.ZodSchema<CompletePaymentMethod> = z.lazy(() => PaymentMethodModelSchema.extend({
  expense: RelatedExpenseModelSchema.array(),
  payment: RelatedPaymentModelSchema.array(),
}))

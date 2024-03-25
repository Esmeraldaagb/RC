import * as z from "zod"
import * as imports from "./schemas"
import { CompletePaymentMethod, RelatedPaymentMethodModelSchema } from "./index"

export const ExpenseModelSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  amount: z.number(),
  payment_type_id: z.number().int(),
})

export interface CompleteExpense extends z.infer<typeof ExpenseModelSchema> {
  payment_type: CompletePaymentMethod
}

/**
 * RelatedExpenseModelSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedExpenseModelSchema: z.ZodSchema<CompleteExpense> = z.lazy(() => ExpenseModelSchema.extend({
  payment_type: RelatedPaymentMethodModelSchema,
}))

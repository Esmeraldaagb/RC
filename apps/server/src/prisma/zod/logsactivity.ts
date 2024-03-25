import * as z from "zod"
import * as imports from "./schemas"
import { CompleteUser, RelatedUserModelSchema } from "./index"

export const LogsActivityModelSchema = z.object({
  id: z.number().int(),
  action: z.string(),
  data: z.string(),
  user_id: z.number().int(),
  entity_name: z.string(),
  entity_id: z.string(),
  date: z.date(),
})

export interface CompleteLogsActivity extends z.infer<typeof LogsActivityModelSchema> {
  user: CompleteUser
}

/**
 * RelatedLogsActivityModelSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedLogsActivityModelSchema: z.ZodSchema<CompleteLogsActivity> = z.lazy(() => LogsActivityModelSchema.extend({
  user: RelatedUserModelSchema,
}))

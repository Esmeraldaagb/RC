import * as z from "zod"
import * as imports from "./schemas"

export const SettingModelSchema = z.object({
  id: z.number().int(),
  key: z.string(),
  value: z.string(),
  meta: z.string(),
})

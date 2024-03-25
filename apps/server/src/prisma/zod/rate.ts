import * as z from "zod"
import * as imports from "./schemas"

export const RateModelSchema = z.object({
  id: z.number().int(),
  origin: z.string(),
  destination: z.string(),
  rate: z.number(),
  description: z.string(),
  mode: z.string(),
})

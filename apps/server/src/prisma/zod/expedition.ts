import * as z from "zod"
import * as imports from "./schemas"

export const ExpeditionModelSchema = z.object({
  id: z.number().int(),
  flight_number: z.string(),
  amount: z.number(),
  weight: z.string(),
  arrival_estimation: z.date(),
  date: z.date(),
})

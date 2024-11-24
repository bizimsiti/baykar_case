import { z } from "zod";

export const formSchema = z.object({
  category: z.string().min(3),
  description: z.string().min(0),
  date: z.string(),
  amount: z.number().nonnegative()
});

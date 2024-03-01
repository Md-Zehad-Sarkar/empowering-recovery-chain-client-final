import { z } from "zod";

export const donateModalValidationSchema = z.object({
  title: z.string().nonempty({ message: "required field" }),
  category: z.string().nonempty({ message: "required field" }),
  amount: z.number().int().min(1),
  description: z.string().nonempty({ message: "required field" }),
});

export type DonateModalValidation = z.infer<typeof donateModalValidationSchema>;

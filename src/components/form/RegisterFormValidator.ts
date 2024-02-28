import { z } from "zod";

export const userRegistrationSchema = z.object({
  userName: z
    .string()
    .min(4, { message: "username must be at least 4 character" }),
  email: z.string().email({ message: "type valid email" }),
  password: z
    .string()
    .min(6, { message: "password can't less then 6 character" })
    .max(12, { message: "password can't more then 12 character" }),
  image: z.string().optional(),
});

export type UserValidationSchema = z.infer<typeof userRegistrationSchema>;

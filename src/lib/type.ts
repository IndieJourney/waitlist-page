import { z } from "zod";

export const EmailSchema = z.object({
    email : z.string().min(1,{ message : "You need to enter your email."}).email("This is not a valid email.")
})

export type Email = z.infer<typeof EmailSchema>;
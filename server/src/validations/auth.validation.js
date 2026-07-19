import {email, z} from "zod"
export const registerSchema=z.object({
    fullName:z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),

  email: z
    .email("Invalid email address")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100),
})

export const loginSchema=z.object({
  email:z
    .email("Invalid email address")
    .trim()
    .toLowerCase()
  ,
  password:z
    .string()
    .min(8, "Password must be at least 8 characters")

})
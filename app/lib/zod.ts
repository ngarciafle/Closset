import * as z from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(1, 'Name is required').regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters" }),
  lastName: z.string().min(1, 'Last name is required').regex(/^[a-zA-Z\s]+$/, { message: "Last name can only contain letters" }),
  email: z.string().email('Invalid email address').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email format" }),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const logInSchema = z.object({
  email: z.string().email('Invalid email address').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email format" }),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})
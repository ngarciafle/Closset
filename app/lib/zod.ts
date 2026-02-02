import * as z from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(1, 'Name is required').regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, { message: "Name can only contain letters" }),
  lastName: z.string().min(1, 'Last name is required').regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, { message: "Last name can only contain letters" }),
  username: z.string().min(1, 'User name is required').regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, { message: "User name can only contain letters" }),
  email: z.string().email('Invalid email address').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email format" }),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const logInSchema = z.object({
  email: z.string().email('Invalid email address').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email format" }),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

export const garmentSchema = z.object({
  name: z.string().min(1, 'Garment name is required'),
  materials: z.string().min(1, 'Materials are required'),
  brand: z.string().min(1, 'Brand is required'),
  size: z.string().optional(),
  color: z.string().min(1, 'Color is required'),
  type: z.string().min(1, 'Type is required'),
});
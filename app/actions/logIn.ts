'use server';
import { logInSchema } from "../lib/zod";

export async function logIn(formData: FormData) {
  const data = {
    email: formData.get('email')?.toString() || '',
    password: formData.get('password')?.toString() || '',

  }

  const parsedData = logInSchema.safeParse(data);

  if (!parsedData.success) {
    console.log("error");
    return;
  }
}
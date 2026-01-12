'use server';
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { pool } from "@/app/lib/auth";
import { signUpSchema } from "@/app/lib/zod";
import { createSession } from "./createSession";

export async function signUp(prevState: any, formData: FormData) {
  const data = {
    name: formData.get('name')?.toString() || '',
    lastName: formData.get('lastName')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    password: formData.get('password')?.toString() || '',
  }
  const parsedData = signUpSchema.safeParse(data); 

  if (!parsedData.success) {
    return {
      success: false,
      errors: parsedData.error.flatten().fieldErrors,
      message: "Fill your data correctly",
      inputs: data,
      timestamp: Date.now(),
    };
  }
  const { name, lastName, email, password } = parsedData.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const client = await pool.connect();
  try {
    const insertQuery = `
      INSERT INTO users (name, "lastName", email, password, "createdAt")
      VALUES ($1, $2, $3, $4, NOW())
      RETURNING "id";
    `;
    const values = [name, lastName, email, hashedPassword];
    const response = await client.query(insertQuery, values);
    const userId = await response.rows[0].id;
    await createSession(userId);
  } catch (error) {
    return {
      success: false,
      message: error,
      timestamp: Date.now(),
      inputs: {name, lastName, email, password},
    };
  } finally {
    client.release();
  }
  redirect('/');
}
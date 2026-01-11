'use server';
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { pool } from "@/app/lib/auth";
import { signUpSchema } from "@/app/lib/zod";
import { createSession } from "./createSession";
import getUserId from "../data/getUserId";

export async function signUp(formData: FormData) {
  const data = {
    name: formData.get('name')?.toString() || '',
    lastName: formData.get('lastName')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    password: formData.get('password')?.toString() || '',
  }
  const parsedData = signUpSchema.safeParse(data); 

  if (!parsedData.success) {
    const errors = parsedData.error.flatten().fieldErrors;
    console.log("error");
    return;
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
    redirect('/');
  } catch (error) {
    console.error('Error inserting user into database:', error);
    return;
  } finally {
    client.release();
  }
}
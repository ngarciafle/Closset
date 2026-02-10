'use server';
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { pool } from "@/app/lib/auth";
import { signUpSchema } from "@/app/lib/zod";
import { createSession } from "./createSession";

interface DatabaseError extends Error {
  code: string;
  detail: string;
}


export async function signUp(prevState: any, formData: FormData) {
  const data = {
    name: formData.get('name')?.toString() || '',
    lastName: formData.get('lastName')?.toString() || '',
    username: formData.get('username')?.toString() || '',
    password: formData.get('password')?.toString() || '',
    email: formData.get('email')?.toString() || '',
  }
  console.log(data)
  const parsedData = signUpSchema.safeParse(data); 
  if (!parsedData.success) {
    return {
      success: false,
      errors: parsedData.error.flatten().fieldErrors,
      message: "Fill your data correctly",
      inputs: { ...data, password: undefined },
      timestamp: Date.now(),
    };
  }
  const { name, lastName, username, email, password } = parsedData.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const client = await pool.connect();
  try {
    const insertQuery = `
      INSERT INTO users (name, "lastName", "username", email, password, "createdAt")
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING "id";
    `;
    const values = [name, lastName, username, email, hashedPassword];
    const response = await client.query(insertQuery, values);
    const userId = await response.rows[0].id;
    await createSession(userId);
  } catch (error) {
    let errors = {
      email: "",
      username: "",
      name: "",
      lastName: "",
      password: "",
    }
    let message = "";
    const dbError = error as DatabaseError;
    if (dbError.code === '23505') {
      message = 'An account with this email already exists.';
      if (dbError.detail.includes('username')) {
        errors.username = 'An account with this username already exists.';
      } else if(dbError.detail.includes('email')) {
        errors.email = 'An account with this email already exists.';
      }
    } else {
      message = 'An error occurred during sign up. Please try again.';
    }

    return {
      success: false,
      errors: errors,
      message: message,
      timestamp: Date.now(),
      inputs: {name, lastName, username, email},
    };
  } finally {
    client.release();
  }
  redirect('/');
}
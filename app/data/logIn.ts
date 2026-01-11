'use server';
import { logInSchema } from "../lib/zod";
import bcrypt from "bcryptjs";
import { pool } from "../lib/auth";
import { redirect } from "next/navigation";
import { createSession } from "../actions/createSession";
import getUserId from "./getUserId";


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

  const { email, password } = parsedData.data;
  
  const client = await pool.connect()

  try {
    const insertQuery = `SELECT password FROM users WHERE email = $1`
    const result = await client.query(insertQuery, [email]);
    const hashGuardado = result.rows[0].password;
    const compared = await bcrypt.compare(password, hashGuardado);
    if (compared) {
      redirect("/");
    }
  } catch {
    console.log("error");
    return;
  } finally {
    client.release();
  }
  const userId = await getUserId(email);
  await createSession(userId);
}
'use server';
import { logInSchema } from "../lib/zod";
import bcrypt from "bcryptjs";
import { pool } from "../lib/auth";
import { redirect } from "next/navigation";
import { createSession } from "../actions/createSession";


export async function logIn(prevState: any, formData: FormData) {
  const data = {
    email: formData.get('email')?.toString() || '',
    password: formData.get('password')?.toString() || '',

  }
  let compared = false;
  let result;
  const parsedData = logInSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Fill your data correctly",
      inputs: data,
      timestamp: Date.now(),
      errors: parsedData.error.flatten().fieldErrors,
    };
  }

  const { email, password } = parsedData.data;
  
  const client = await pool.connect()

  try {
    const insertQuery = `SELECT password, id FROM users WHERE email = $1`
    result = await client.query(insertQuery, [email]);
    const hashGuardado = result.rows[0].password;
    compared = await bcrypt.compare(password, hashGuardado);
  } catch (error) {
    return {
      success: false,
      message: error,
      timestamp: Date.now(),
      inputs: {email, password},
      errors: {email: '', password: ''}
    };
  } finally {
    client.release();
  }
  if (compared) {
    await createSession(result.rows[0].id);
    redirect("/");
  }
}
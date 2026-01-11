import { pool } from "../lib/auth";

export default async function getUserId(email: string): Promise<string> {
  const result = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
  return result.rows[0].id;
}
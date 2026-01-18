import { pool } from "../lib/auth";

export async function getUserIdEmail(email: string): Promise<string> {
  const result = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
  return result.rows[0].id;
}
export async function getUserIdUsername(username: string): Promise<string> {
  const result = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
  return result.rows[0].id;
}
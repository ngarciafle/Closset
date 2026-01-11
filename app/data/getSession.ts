import { pool } from "../lib/auth";

export default async function getUserId(token: string): Promise<string> {
  const response = await pool.query(`SELECT "userId" FROM sessions WHERE "token" = $1`, [token])
  return await response.rows[0].token;
}
import { pool } from "../lib/auth";

export async function getUserPublicData(username: string) {
  const client = await pool.connect();
  const query = `SELECT name, image, id FROM users WHERE username = $1`;
  try {
    const result = await client.query(query, [username]);
    return result.rows[0];
  } catch {
    throw new Error("Failed to get user data");
  } finally {
    client.release();
  }
}
import { pool } from "../lib/auth";

export async function getTags(id: string) {
  const client = await pool.connect();
  try {
    const query = `SELECT tags FROM garment_tags WHERE id = $1`;
    const response = await client.query(query, [id]);
    return response.rows[0].tags;
  } catch {
    throw new Error("Failed to get tags");
  } finally {
    client.release();
  }
}
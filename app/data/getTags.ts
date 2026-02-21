import { pool } from "../lib/auth";

export async function getTags(id: string) {
  const client = await pool.connect();
  try {
    const queryIdx = `SELECT tags FROM garment_tags WHERE id = $1`;
    const queryTag = `SELECT tag FROM tags WHERE id = $1`;
    const idx = await client.query(queryIdx, [id]);
    const response = await client.query(queryTag, [idx.rows[0].tags]);
    return response.rows.map((row) => row.tag);
  } catch (error) {
    throw new Error("Failed to get tags");
  } finally {
    client.release();
  }
}
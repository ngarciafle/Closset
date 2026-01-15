import { pool } from "../lib/auth";

export async function followUser(followerId: string, followingId: string) {
  const client = await pool.connect();
  try {
    const query = `INSERT INTO follows ("followerId", "followingId") VALUES ($1, $2)`;
    await client.query(query, [followerId, followingId]);
  } catch {
    throw new Error("Failed to follow user");
  } finally {
    client.release();
  }
}
import { pool } from "../lib/auth";

export async function followUser(followerId: string, followingId: string) {
  const client = await pool.connect();
  try {
    const query = `INSERT INTO follows ("follower_id", "following_id") VALUES ($1, $2)`;
    await client.query(query, [followerId, followingId]);
  } catch (error) {
    throw new Error("Failed to follow user");
  } finally {
    client.release();
  }
}
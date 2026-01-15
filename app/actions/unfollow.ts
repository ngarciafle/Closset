import { pool } from "../lib/auth";

export async function unfollowUser(followerId: string, followingId: string) {
  const client = await pool.connect();
  try {
    const query = `DELETE FROM follows WHERE "followerId" = $1 AND "followingId" = $2`;
    await client.query(query, [followerId, followingId]);
  } catch {
    throw new Error("Failed to unfollow user");
  } finally {
    client.release();
  }
}
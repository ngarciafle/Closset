import { pool } from "../lib/auth";

export async function unfollowUser(followerId: string, followingId: string) {
  const client = await pool.connect();
  try {
    const query = `DELETE FROM follows WHERE "follower_id" = $1 AND "following_id" = $2`;
    await client.query(query, [followerId, followingId]);
  } catch (error) {
    throw new Error("Failed to unfollow user");
  } finally {
    client.release();
  }
}
import { pool } from "../lib/auth";

export async function getFollow(id: string) {
  const client = await pool.connect();
  try {
    const query = `SELECT COUNT(*) AS "followerCount" FROM follows WHERE "following_id" = $1`;
    const response = await client.query(query, [id]);
    return response.rows[0].followerCount;
  } catch {
    throw new Error("Failed to get follower count");
  } finally {
    client.release();
  }
}
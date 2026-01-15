import { pool } from "../lib/auth";

export async function getFollowing(id: string) {
  const client = await pool.connect();
  try {
    const query = `SELECT COUNT(*) AS "followingCount" FROM follows WHERE "followerId" = $1`;
    const response = await client.query(query, [id]);
    return response.rows[0].followingCount;
  } catch {
    throw new Error("Failed to get following count");
  } finally {
    client.release();
  }
}
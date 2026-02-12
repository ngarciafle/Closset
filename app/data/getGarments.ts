"use server";
import { pool } from "../lib/auth";

export async function getGarments(userName: string) {
  const client = await pool.connect();
  try {
    const query = `
      SELECT g.* FROM garments g
      JOIN users u ON g."user_id" = u.id
      WHERE u.username = $1
      ORDER BY g."created_at" DESC
    `;
    const response = await client.query(query, [userName]);
    console.log("Garments fetched:", response.rows);
    return response.rows;
  } catch (error) {
    throw new Error("Failed to get garments");
  } finally {
    client.release();
  }
}


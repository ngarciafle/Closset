"use server";
import { pool } from "../lib/auth";

export default async function getGarmentInfo(id: string) {
  const client = await pool.connect()
  try {
    const query = `SELECT * FROM garments WHERE id = $1`;
    const response = await client.query(query, [id]);
    return response.rows[0];
  } catch (error) {
    throw new Error("Failed to get garment info");
  } finally {
    client.release()
  }
}
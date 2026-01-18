'use server'
import { pool } from "@/app/lib/auth";
import { getSession } from "@/app/data/getSession";
import { redirect } from "next/navigation";

export async function updateBio(newBio: string) { 
  const session = await getSession();
  if (!session) {
    console.log("User not authenticated");
    redirect('/login');
  }
  const client = await pool.connect();
  try {
    const updateQuery = `UPDATE users SET bio = $1 WHERE id = $2`;
    await client.query(updateQuery, [newBio, session.id]);
  } catch (error) {
    console.error("Error updating bio:", error);
  } finally {
    client.release();
  }
}
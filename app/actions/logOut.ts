'use server';
import { pool } from "../lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function LogOut() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('sessionToken')?.value;
  if (!sessionToken) {
    redirect('/');
  }
  const client = await pool.connect();
  try {
    const deleteQuery = `DELETE FROM sessions WHERE token = $1`;
    await client.query(deleteQuery, [sessionToken]);
    cookieStore.delete('sessionToken');
  } catch (error) {
    console.log("error logging out:", error);
  } finally {
    client.release();
    redirect('/');
  } 
}
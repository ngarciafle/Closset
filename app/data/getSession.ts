'use server';

import { pool } from "../lib/auth";
import { cookies } from "next/headers";
import { cache } from "react";

export const getSession = cache(async () => { 
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('sessionToken')?.value;

  if (!sessionToken) {
    return null;
  }
  const client = await pool.connect();
  try {
    const query = `
      SELECT users.name, users."lastName", users.image, users.id
      FROM sessions
      JOIN users ON sessions."userId" = users.id
      WHERE sessions.token = $1 AND sessions."expiresAt" > NOW()
    `;
    const result = await client.query(query, [sessionToken]);
    if (result.rows.length === 0) {
      return null;
    } 
    return result.rows[0];
  } catch (error) {
    console.log("error fetching session:", error);
    return null;
  } finally {
    client.release();
  }
});

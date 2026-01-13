import { pool } from "../lib/auth";
import { cookies } from "next/headers";
import crypto from 'crypto';


export async function createSession(userId: string) {
  const client = await pool.connect();
  const token = crypto.randomBytes(64).toString('hex');
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const insertQuery = `INSERT INTO sessions ("expiresAt", "userId", token) VALUES ($1, $2, $3)`;
  const values = [expiresAt, userId, token];
  await client.query(insertQuery, values);
  client.release();
  (await cookies()).set('sessionToken', token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt, 
    sameSite: 'lax',
    path: '/',
  });
}
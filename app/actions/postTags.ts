  import { pool } from "../lib/auth";

  export async function postTags(id: string, tags: string[]) {
    const client = await pool.connect();
    try {
      const query = `INSERT INTO garment_tags (garment_id, tag) VALUES ($1, $2) ON CONFLICT (garment_id, tag) DO UPDATE SET tag = $2`;
      //const queryIdx = `SELECT ` IDX IS ON SEQ GET IT AND USE IT? TOO MUCH?? 
      for (const tag of tags) {
        const idx = 
        await client.query(query, [id, tag]);
      }
    } catch (error) {
      throw new Error("Failed to post tags");
    } finally {
      client.release();
    }
  }
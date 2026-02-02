"user server"
import { redirect } from "next/navigation";
import { pool } from "../lib/auth";
import { garmentSchema } from "../lib/zod"; 

export async function uploadGarment(formData: FormData) {
  const data = {
    name: formData.get('name')?.toString() || '',
    materials: formData.get('materials')?.toString() || '',
    brand: formData.get('brand')?.toString() || '',
    type: formData.get('type')?.toString() || '',
    size: formData.get('size')?.toString() || '',
    color: formData.get('color')?.toString() || '',
  }
  const parsedData = garmentSchema.safeParse(data);
  if (!parsedData.success) { //pass exceptions
    throw new Error("Invalid garment data");
  }
  const client = await pool.connect();
  try {
    const insertQuery = `
      INSERT INTO garments (name, materials, "userId", brand, size, type, color)
      VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const values = [data.name, data.materials, /* userId */, data.brand, data.size, data.type, data.color];
    const response = await client.query(insertQuery, values); // not neccessary 
  } catch (error) {
    console.error("Error uploading garment:", error);
    throw error;
  } finally {
    client.release();
  }
  redirect('/')
}
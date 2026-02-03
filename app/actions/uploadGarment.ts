"use server"
import { redirect } from "next/navigation";
import { pool } from "../lib/auth";
import { garmentSchema } from "../lib/zod"; 
import { v2 as cloudinary } from 'cloudinary';
import { getSession } from "../data/getSession";


export async function uploadGarment(formData: FormData) {
  //Get session
  const session = await getSession();
  if (!session) {
    throw new Error("User not authenticated");
  }
  
  // Configure Cloudinary
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // Upload image to Cloudinary and get the URL
  const files = formData.getAll('image') as File[];
  let imagesUrls: string[] = [];

  for (const file of files) {
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result: any = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: 'image', folder: "garments", public_id: crypto.randomUUID() }, (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }).end(buffer);
      })
      imagesUrls.push(result.secure_url);
    }
  }

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
    console.error("Garment data validation failed:", parsedData.error);
    throw new Error("Invalid garment data");
  }
  const client = await pool.connect();
  try {
    const insertQuery = `
      INSERT INTO garments (name, materials, "userId", brand, size, type, color, images)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    const values = [data.name, data.materials, session.id , data.brand, data.size, data.type, data.color, imagesUrls];
    const response = await client.query(insertQuery, values); // not neccessary 
  } catch (error) {
    console.error("Error uploading garment:", error);
    throw error;
  } finally {
    client.release();
  }
  redirect('/${session.username}');
}
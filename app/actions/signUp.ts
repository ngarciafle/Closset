'use server';
import { z } from "zod";
import db from "@/app/lib/db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { pool } from "@/app/lib/auth";
import { signUpSchema, SignUpSchema } from "@/app/lib/zod";

export async function signUp(formData: FormData) {
  const data = {
    name: formData.get('name')?.toString() || '',
    lastName: formData.get('lastName')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    password: formData.get('password')?.toString() || '',
  }
  const parsedData = signUpSchema.safeParse(data); 

  if (!parsedData.success) {
    const errors = parsedData.error.flatten().fieldErrors;
    console.log('Validation errors:', errors);
    return;
  }
  const { name, lastName, email, password } = parsedData.data;

  console.log('Parsed data:', parsedData.data);
}
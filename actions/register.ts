'use server';

import bcrypt from 'bcryptjs';

import prisma from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { registerSchema, RegisterSchema } from '@/schemas';

export const register = async (value: RegisterSchema) => {
  const validateFields = registerSchema.safeParse(value);

  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { name, email, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email already in use!' };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Send verification token

  return { success: 'User created!' };
};

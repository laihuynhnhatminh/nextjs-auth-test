'use server';

import { registerSchema, RegisterSchema } from '@/schemas';

export const register = async (value: RegisterSchema) => {
  const validateFields = registerSchema.safeParse(value);

  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Email sent!' };
};

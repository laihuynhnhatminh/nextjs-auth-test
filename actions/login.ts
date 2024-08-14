'use server';

import { loginSchema, LoginSchema } from '@/schemas';

export const login = async (value: LoginSchema) => {
  const validateFields = loginSchema.safeParse(value);

  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Email sent!' };
};

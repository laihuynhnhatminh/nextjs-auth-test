'use server';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes/routes';
import { loginSchema, LoginSchema } from '@/schemas';
import { AuthError } from 'next-auth';

export const login = async (value: LoginSchema) => {
  const validateFields = loginSchema.safeParse(value);

  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' };
        default:
          return { error: 'Something went wrong' };
      }
    }

    // Throw to redirect, otherwise will be stuck
    throw error;
  }
};

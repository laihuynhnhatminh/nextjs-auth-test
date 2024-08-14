import * as z from 'zod';

export const registerSchema = z.object({
  email: z.string().email({ message: 'Email is required!' }),
  password: z.string().min(6, { message: 'Password with minimum of 6 characters is required!' }),
  name: z.string().min(1, { message: 'Name is required' }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const defaultRegisterValues: RegisterSchema = {
  email: '',
  password: '',
  name: '',
};

import { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export type ExtendedUser = DefaultSession['user'] & {
  role: 'ADMIN' | 'USER';
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }

  interface JWT {
    role: 'ADMIN' | 'USER';
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    role: 'ADMIN' | 'USER';
  }
}

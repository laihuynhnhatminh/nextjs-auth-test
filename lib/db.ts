import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

if (process.env.CURRENT_ENV == 'production') {
  const prisma = PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

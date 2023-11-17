// import { PrismaClient } from '@prisma/client'
// // let prisma
// // if (process.env.NODE_ENV === 'production') {
// //   prisma = new PrismaClient()
// // } else {
// //   if (!global.prisma) {
// //     global.prisma = new PrismaClient()
// //   }
// //   prisma = global.prisma
// // }
// const prisma = new PrismaClient()
// export default prisma


import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
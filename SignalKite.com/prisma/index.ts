import { Pool, type PoolConfig, neonConfig } from '@neondatabase/serverless'
import { PrismaClient } from '@prisma/client'
import ws from 'ws'

declare global {
  var prisma: PrismaClient | undefined
}

neonConfig.webSocketConstructor = ws
const poolConfig: PoolConfig = { connectionString: process.env.DATABASE_URL }

const pool = new Pool(poolConfig)
const adapter = new PrismaNeon(pool)

const singleton =
  global.prisma || new PrismaClient({ adapter, log: ['info', 'warn', 'error'] })

if (process.env.NODE_ENV === 'development') global.prisma = singleton

export const db = singleton

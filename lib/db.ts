import { Pool } from 'pg'

// تنظیمات اتصال به PostgreSQL
// این مقادیر را با اطلاعات سرور خودتان جایگزین کنید
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'bearing_shop',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'your_password',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Helper function for queries
export async function query<T>(text: string, params?: unknown[]): Promise<T[]> {
  const start = Date.now()
  const result = await pool.query(text, params)
  const duration = Date.now() - start
  console.log('Executed query', { text, duration, rows: result.rowCount })
  return result.rows as T[]
}

// Helper function for single row queries
export async function queryOne<T>(text: string, params?: unknown[]): Promise<T | null> {
  const rows = await query<T>(text, params)
  return rows[0] || null
}

// Helper function for insert/update/delete
export async function execute(text: string, params?: unknown[]): Promise<number> {
  const result = await pool.query(text, params)
  return result.rowCount || 0
}

// Test database connection
export async function testConnection(): Promise<boolean> {
  try {
    await pool.query('SELECT NOW()')
    console.log('Database connection successful')
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}

export default pool

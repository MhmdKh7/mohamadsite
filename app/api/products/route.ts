import { NextRequest, NextResponse } from 'next/server'
import { query, execute } from '@/lib/db'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image_url: string
  category: string
  brand: string
  model: string
  stock: number
  specifications: Record<string, string>
  created_at: Date
  updated_at: Date
}

// GET /api/products - دریافت لیست محصولات
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const brand = searchParams.get('brand')
    const search = searchParams.get('search')
    const sortBy = searchParams.get('sort') || 'created_at'
    const order = searchParams.get('order') || 'DESC'
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    let queryText = 'SELECT * FROM products WHERE 1=1'
    const params: unknown[] = []
    let paramIndex = 1

    if (category) {
      queryText += ` AND category = $${paramIndex++}`
      params.push(category)
    }

    if (brand) {
      queryText += ` AND brand = $${paramIndex++}`
      params.push(brand)
    }

    if (search) {
      queryText += ` AND (name ILIKE $${paramIndex} OR model ILIKE $${paramIndex} OR brand ILIKE $${paramIndex})`
      params.push(`%${search}%`)
      paramIndex++
    }

    // Validate sort column to prevent SQL injection
    const validSortColumns = ['created_at', 'price', 'name', 'stock']
    const sortColumn = validSortColumns.includes(sortBy) ? sortBy : 'created_at'
    const sortOrder = order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'

    queryText += ` ORDER BY ${sortColumn} ${sortOrder}`
    queryText += ` LIMIT $${paramIndex++} OFFSET $${paramIndex++}`
    params.push(limit, offset)

    const products = await query<Product>(queryText, params)

    // Get total count
    let countQuery = 'SELECT COUNT(*) as total FROM products WHERE 1=1'
    const countParams: unknown[] = []
    let countParamIndex = 1

    if (category) {
      countQuery += ` AND category = $${countParamIndex++}`
      countParams.push(category)
    }

    if (brand) {
      countQuery += ` AND brand = $${countParamIndex++}`
      countParams.push(brand)
    }

    if (search) {
      countQuery += ` AND (name ILIKE $${countParamIndex} OR model ILIKE $${countParamIndex} OR brand ILIKE $${countParamIndex})`
      countParams.push(`%${search}%`)
    }

    const countResult = await query<{ total: string }>(countQuery, countParams)
    const total = parseInt(countResult[0]?.total || '0')

    return NextResponse.json({
      products,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + products.length < total,
      },
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'خطا در دریافت محصولات' },
      { status: 500 }
    )
  }
}

// POST /api/products - ایجاد محصول جدید (فقط ادمین)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, price, image_url, category, brand, model, stock, specifications } = body

    if (!name || !price || !category) {
      return NextResponse.json(
        { error: 'نام، قیمت و دسته‌بندی الزامی هستند' },
        { status: 400 }
      )
    }

    const result = await query<Product>(
      `INSERT INTO products (name, description, price, image_url, category, brand, model, stock, specifications)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [name, description || '', price, image_url || '', category, brand || '', model || '', stock || 0, JSON.stringify(specifications || {})]
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'خطا در ایجاد محصول' },
      { status: 500 }
    )
  }
}

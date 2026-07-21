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
}

// GET /api/products/[id] - دریافت جزئیات محصول
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const productId = parseInt(id)

    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'شناسه محصول نامعتبر است' },
        { status: 400 }
      )
    }

    const products = await query<Product>(
      'SELECT * FROM products WHERE id = $1',
      [productId]
    )

    if (products.length === 0) {
      return NextResponse.json(
        { error: 'محصول یافت نشد' },
        { status: 404 }
      )
    }

    return NextResponse.json(products[0])
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'خطا در دریافت محصول' },
      { status: 500 }
    )
  }
}

// PUT /api/products/[id] - ویرایش محصول (فقط ادمین)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const productId = parseInt(id)
    const body = await request.json()

    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'شناسه محصول نامعتبر است' },
        { status: 400 }
      )
    }

    const { name, description, price, image_url, category, brand, model, stock, specifications } = body

    const result = await query<Product>(
      `UPDATE products 
       SET name = COALESCE($1, name),
           description = COALESCE($2, description),
           price = COALESCE($3, price),
           image_url = COALESCE($4, image_url),
           category = COALESCE($5, category),
           brand = COALESCE($6, brand),
           model = COALESCE($7, model),
           stock = COALESCE($8, stock),
           specifications = COALESCE($9, specifications),
           updated_at = NOW()
       WHERE id = $10
       RETURNING *`,
      [name, description, price, image_url, category, brand, model, stock, specifications ? JSON.stringify(specifications) : null, productId]
    )

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'محصول یافت نشد' },
        { status: 404 }
      )
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { error: 'خطا در ویرایش محصول' },
      { status: 500 }
    )
  }
}

// DELETE /api/products/[id] - حذف محصول (فقط ادمین)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const productId = parseInt(id)

    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'شناسه محصول نامعتبر است' },
        { status: 400 }
      )
    }

    const rowsAffected = await execute(
      'DELETE FROM products WHERE id = $1',
      [productId]
    )

    if (rowsAffected === 0) {
      return NextResponse.json(
        { error: 'محصول یافت نشد' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'محصول با موفقیت حذف شد' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'خطا در حذف محصول' },
      { status: 500 }
    )
  }
}

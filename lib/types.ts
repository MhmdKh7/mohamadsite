export interface Product {
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

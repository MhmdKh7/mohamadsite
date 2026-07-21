'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Pencil, Trash2, Search, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

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
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'بلبرینگ شیار عمیق SKF 6205',
    description: 'بلبرینگ شیار عمیق با کیفیت بالا',
    price: 850000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop',
    category: 'ball-bearing',
    brand: 'SKF',
    model: '6205-2RS',
    stock: 50,
  },
  {
    id: 2,
    name: 'رولبرینگ مخروطی Timken',
    description: 'رولبرینگ مخروطی برای بارهای ترکیبی',
    price: 1250000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop',
    category: 'roller-bearing',
    brand: 'Timken',
    model: '32205',
    stock: 30,
  },
  {
    id: 3,
    name: 'یاتاقان UCP205 FAG',
    description: 'یاتاقان با پایه برای نصب آسان',
    price: 1850000,
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop',
    category: 'bearing-housing',
    brand: 'FAG',
    model: 'UCP205',
    stock: 25,
  },
]

const categories = [
  { value: 'ball-bearing', label: 'بلبرینگ' },
  { value: 'roller-bearing', label: 'رولبرینگ' },
  { value: 'bearing-housing', label: 'یاتاقان' },
  { value: 'oil-seal', label: 'کاسه نمد' },
]

const brands = ['SKF', 'FAG', 'NSK', 'Timken', 'NTN', 'Koyo']

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
    category: '',
    brand: '',
    model: '',
    stock: '',
  })

  const filteredProducts = products.filter(
    (p) =>
      p.name.includes(searchQuery) ||
      p.model.includes(searchQuery) ||
      p.brand.includes(searchQuery)
  )

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price)
  }

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product)
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        image_url: product.image_url,
        category: product.category,
        brand: product.brand,
        model: product.model,
        stock: product.stock.toString(),
      })
    } else {
      setEditingProduct(null)
      setFormData({
        name: '',
        description: '',
        price: '',
        image_url: '',
        category: '',
        brand: '',
        model: '',
        stock: '',
      })
    }
    setIsDialogOpen(true)
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.price || !formData.category) {
      toast.error('لطفا فیلدهای الزامی را پر کنید')
      return
    }

    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id
            ? {
                ...p,
                ...formData,
                price: parseInt(formData.price),
                stock: parseInt(formData.stock) || 0,
              }
            : p
        )
      )
      toast.success('محصول با موفقیت ویرایش شد')
    } else {
      const newProduct: Product = {
        id: Date.now(),
        ...formData,
        price: parseInt(formData.price),
        stock: parseInt(formData.stock) || 0,
      }
      setProducts((prev) => [...prev, newProduct])
      toast.success('محصول با موفقیت اضافه شد')
    }

    setIsDialogOpen(false)
  }

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
    toast.success('محصول حذف شد')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">مدیریت محصولات</h1>
          <p className="text-muted-foreground">{products.length} محصول</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()}>
              <Plus className="h-4 w-4 ml-2" />
              افزودن محصول
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProduct ? 'ویرایش محصول' : 'افزودن محصول جدید'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">نام محصول *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="model">مدل</Label>
                  <Input
                    id="model"
                    value={formData.model}
                    onChange={(e) => setFormData((p) => ({ ...p, model: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">توضیحات</Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">دسته‌بندی *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(v) => setFormData((p) => ({ ...p, category: v }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب دسته‌بندی" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="brand">برند</Label>
                  <Select
                    value={formData.brand}
                    onValueChange={(v) => setFormData((p) => ({ ...p, brand: v }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب برند" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">قیمت (تومان) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData((p) => ({ ...p, price: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="stock">موجودی</Label>
                  <Input
                    id="stock"
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData((p) => ({ ...p, stock: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image_url">آدرس تصویر</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => setFormData((p) => ({ ...p, image_url: e.target.value }))}
                  placeholder="https://..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                انصراف
              </Button>
              <Button onClick={handleSubmit}>
                {editingProduct ? 'ذخیره تغییرات' : 'افزودن محصول'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative max-w-md">
            <Input
              placeholder="جستجوی محصول..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">محصول</th>
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">دسته‌بندی</th>
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">برند</th>
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">قیمت</th>
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">موجودی</th>
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b last:border-0">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 bg-secondary rounded overflow-hidden shrink-0">
                          <Image
                            src={product.image_url}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium line-clamp-1">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.model}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="secondary">
                        {categories.find((c) => c.value === product.category)?.label}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-sm">{product.brand}</td>
                    <td className="py-4 px-4 text-sm font-medium">
                      {formatPrice(product.price)} تومان
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant={product.stock > 10 ? 'default' : product.stock > 0 ? 'secondary' : 'destructive'}>
                        {product.stock > 0 ? `${product.stock} عدد` : 'ناموجود'}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleOpenDialog(product)}>
                            <Pencil className="h-4 w-4 ml-2" />
                            ویرایش
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDelete(product.id)}
                            className="text-destructive"
                          >
                            <Trash2 className="h-4 w-4 ml-2" />
                            حذف
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

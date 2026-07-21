'use client'

import { useState } from 'react'
import { Eye, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

interface Order {
  id: string
  customer: string
  email: string
  phone: string
  address: string
  items: { name: string; quantity: number; price: number }[]
  total: number
  status: string
  date: string
}

const initialOrders: Order[] = [
  {
    id: 'BRG-1234',
    customer: 'علی محمدی',
    email: 'ali@example.com',
    phone: '09123456789',
    address: 'تهران، خیابان آزادی، پلاک ۱۲۳',
    items: [
      { name: 'بلبرینگ SKF 6205', quantity: 5, price: 850000 },
      { name: 'رولبرینگ Timken', quantity: 2, price: 1250000 },
    ],
    total: 6750000,
    status: 'pending',
    date: '1404/01/15',
  },
  {
    id: 'BRG-1235',
    customer: 'مریم احمدی',
    email: 'maryam@example.com',
    phone: '09121234567',
    address: 'اصفهان، خیابان چهارباغ، پلاک ۴۵۶',
    items: [
      { name: 'یاتاقان FAG UCP205', quantity: 3, price: 1850000 },
    ],
    total: 5550000,
    status: 'shipped',
    date: '1404/01/14',
  },
  {
    id: 'BRG-1236',
    customer: 'رضا کریمی',
    email: 'reza@example.com',
    phone: '09129876543',
    address: 'شیراز، خیابان زند، پلاک ۷۸۹',
    items: [
      { name: 'بلبرینگ NSK 6206', quantity: 10, price: 920000 },
    ],
    total: 9200000,
    status: 'delivered',
    date: '1404/01/13',
  },
  {
    id: 'BRG-1237',
    customer: 'فاطمه حسینی',
    email: 'fatemeh@example.com',
    phone: '09127654321',
    address: 'مشهد، بلوار وکیل‌آباد، پلاک ۱۱۱',
    items: [
      { name: 'کاسه نمد SKF', quantity: 20, price: 180000 },
    ],
    total: 3600000,
    status: 'processing',
    date: '1404/01/15',
  },
]

const statusOptions = [
  { value: 'pending', label: 'در انتظار', color: 'bg-gray-100 text-gray-700' },
  { value: 'processing', label: 'در حال پردازش', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'shipped', label: 'ارسال شده', color: 'bg-blue-100 text-blue-700' },
  { value: 'delivered', label: 'تحویل داده شده', color: 'bg-green-100 text-green-700' },
  { value: 'cancelled', label: 'لغو شده', color: 'bg-red-100 text-red-700' },
]

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.includes(searchQuery) ||
      order.customer.includes(searchQuery) ||
      order.phone.includes(searchQuery)
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price)
  }

  const getStatusBadge = (status: string) => {
    const statusOption = statusOptions.find((s) => s.value === status)
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${statusOption?.color}`}>
        {statusOption?.label}
      </span>
    )
  }

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    )
    toast.success('وضعیت سفارش به‌روزرسانی شد')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">مدیریت سفارش‌ها</h1>
        <p className="text-muted-foreground">{orders.length} سفارش</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Input
                placeholder="جستجوی سفارش..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="وضعیت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه</SelectItem>
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">شماره سفارش</th>
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">مشتری</th>
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">تاریخ</th>
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">مبلغ</th>
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">وضعیت</th>
                  <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b last:border-0">
                    <td className="py-4 px-4 font-mono text-sm">{order.id}</td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.phone}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm">{order.date}</td>
                    <td className="py-4 px-4 text-sm font-medium">
                      {formatPrice(order.total)} تومان
                    </td>
                    <td className="py-4 px-4">{getStatusBadge(order.status)}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedOrder(order)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Select
                          value={order.status}
                          onValueChange={(v) => handleStatusChange(order.id, v)}
                        >
                          <SelectTrigger className="w-32 h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {statusOptions.map((status) => (
                              <SelectItem key={status.value} value={status.value}>
                                {status.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Order Details Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>جزئیات سفارش {selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              {/* Customer Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">مشتری</p>
                  <p className="font-medium">{selectedOrder.customer}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">شماره تماس</p>
                  <p className="font-medium">{selectedOrder.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ایمیل</p>
                  <p className="font-medium">{selectedOrder.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">تاریخ سفارش</p>
                  <p className="font-medium">{selectedOrder.date}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">آدرس</p>
                <p className="font-medium">{selectedOrder.address}</p>
              </div>

              {/* Order Items */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">آیتم‌های سفارش</p>
                <div className="border rounded-lg divide-y">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between p-3">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.quantity} عدد</p>
                      </div>
                      <p className="font-medium">
                        {formatPrice(item.price * item.quantity)} تومان
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="font-bold text-lg">جمع کل</span>
                <span className="font-bold text-lg text-primary">
                  {formatPrice(selectedOrder.total)} تومان
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

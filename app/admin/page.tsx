import { 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const stats = [
  {
    title: 'کل محصولات',
    value: '۱۲۴',
    change: '+۱۲',
    trend: 'up',
    icon: Package,
  },
  {
    title: 'سفارش‌های جدید',
    value: '۴۵',
    change: '+۲۳%',
    trend: 'up',
    icon: ShoppingCart,
  },
  {
    title: 'کاربران',
    value: '۸۹۲',
    change: '+۱۸',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'فروش این ماه',
    value: '۱۲.۵M',
    change: '-۵%',
    trend: 'down',
    icon: TrendingUp,
  },
]

const recentOrders = [
  { id: 'BRG-1234', customer: 'علی محمدی', amount: '۲,۵۰۰,۰۰۰', status: 'در انتظار' },
  { id: 'BRG-1235', customer: 'مریم احمدی', amount: '۱,۸۵۰,۰۰۰', status: 'ارسال شده' },
  { id: 'BRG-1236', customer: 'رضا کریمی', amount: '۳,۲۰۰,۰۰۰', status: 'تحویل داده شده' },
  { id: 'BRG-1237', customer: 'فاطمه حسینی', amount: '۹۵۰,۰۰۰', status: 'در انتظار' },
  { id: 'BRG-1238', customer: 'محمد رضایی', amount: '۴,۱۰۰,۰۰۰', status: 'در حال پردازش' },
]

const topProducts = [
  { name: 'بلبرینگ SKF 6205', sales: '۱۲۳', revenue: '۱۰۴.۵M' },
  { name: 'رولبرینگ Timken 32205', sales: '۸۹', revenue: '۱۱۱.۲M' },
  { name: 'یاتاقان FAG UCP205', sales: '۶۷', revenue: '۱۲۳.۹M' },
  { name: 'بلبرینگ NSK 6206', sales: '۵۴', revenue: '۴۹.۶M' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">داشبورد</h1>
        <p className="text-muted-foreground">خلاصه وضعیت فروشگاه</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <div className={`flex items-center gap-1 mt-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUp className="h-4 w-4" />
                    ) : (
                      <ArrowDown className="h-4 w-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tables */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>سفارش‌های اخیر</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">شماره</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">مشتری</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">مبلغ</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">وضعیت</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b last:border-0">
                      <td className="py-3 px-2 text-sm font-mono">{order.id}</td>
                      <td className="py-3 px-2 text-sm">{order.customer}</td>
                      <td className="py-3 px-2 text-sm">{order.amount}</td>
                      <td className="py-3 px-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === 'تحویل داده شده' 
                            ? 'bg-green-100 text-green-700'
                            : order.status === 'ارسال شده'
                            ? 'bg-blue-100 text-blue-700'
                            : order.status === 'در حال پردازش'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>محصولات پرفروش</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">محصول</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">فروش</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">درآمد</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-3 px-2 text-sm">{product.name}</td>
                      <td className="py-3 px-2 text-sm">{product.sales}</td>
                      <td className="py-3 px-2 text-sm font-medium text-primary">{product.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

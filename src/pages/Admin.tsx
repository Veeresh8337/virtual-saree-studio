import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Order } from '@/types/product';
import { Package, TrendingUp, Users, IndianRupee } from 'lucide-react';

export default function Admin() {
  const [orders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'pending').length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Business Dashboard</h1>
          <p className="text-muted-foreground">Manage your saree boutique</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-muted-foreground">Total Revenue</div>
              <IndianRupee className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">₹{totalRevenue.toLocaleString()}</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-muted-foreground">Total Orders</div>
              <Package className="w-5 h-5 text-accent" />
            </div>
            <div className="text-3xl font-bold">{totalOrders}</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-muted-foreground">Pending Orders</div>
              <TrendingUp className="w-5 h-5 text-emerald" />
            </div>
            <div className="text-3xl font-bold">{pendingOrders}</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-muted-foreground">Customers</div>
              <Users className="w-5 h-5 text-secondary" />
            </div>
            <div className="text-3xl font-bold">{new Set(orders.map(o => o.customerEmail)).size}</div>
          </Card>
        </div>

        {/* Orders Table */}
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-6">
            {orders.length === 0 ? (
              <Card className="p-12 text-center">
                <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-bold mb-2">No orders yet</h3>
                <p className="text-muted-foreground">Orders will appear here once customers make purchases</p>
              </Card>
            ) : (
              orders.map((order) => (
                <Card key={order.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold mb-1">Order #{order.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <Badge variant="secondary">{order.status}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Customer</div>
                      <div className="font-semibold">{order.customerName}</div>
                      <div className="text-sm">{order.customerEmail}</div>
                      <div className="text-sm">{order.customerPhone}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Delivery Address</div>
                      <div className="text-sm">{order.address}</div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-sm text-muted-foreground mb-2">Items ({order.items.length})</div>
                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span>{item.saree.name} x{item.quantity}</span>
                          <span className="font-semibold">
                            ₹{((item.saree.price + (item.blouse?.price || 0)) * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-lg font-bold mt-3 pt-3 border-t">
                      <span>Total</span>
                      <span>₹{order.total.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">Update Status</Button>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="pending">
            <div className="text-center py-12 text-muted-foreground">
              Filter functionality coming soon
            </div>
          </TabsContent>

          <TabsContent value="confirmed">
            <div className="text-center py-12 text-muted-foreground">
              Filter functionality coming soon
            </div>
          </TabsContent>

          <TabsContent value="shipped">
            <div className="text-center py-12 text-muted-foreground">
              Filter functionality coming soon
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}

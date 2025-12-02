import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Banknote } from 'lucide-react';
import { toast } from 'sonner';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'upi' as 'upi' | 'cod' | 'card',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save order to localStorage
    const order = {
      id: Date.now().toString(),
      items: cart,
      total: Math.round(cartTotal * 1.05),
      ...formData,
      status: 'pending',
      date: new Date().toISOString(),
    };
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    clearCart();
    toast.success('Order placed successfully!');
    navigate('/order-success');
  };

  const total = Math.round(cartTotal * 1.05);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Details */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Customer Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </Card>

              {/* Shipping Address */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Payment Method */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => setFormData({ ...formData, paymentMethod: value as any })}
                >
                  <Card className="p-4 cursor-pointer hover:border-primary transition-all">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer flex-1">
                        <Smartphone className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-semibold">UPI Payment</div>
                          <div className="text-sm text-muted-foreground">Google Pay, PhonePe, Paytm</div>
                        </div>
                      </Label>
                    </div>
                  </Card>

                  <Card className="p-4 cursor-pointer hover:border-primary transition-all">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-semibold">Credit / Debit Card</div>
                          <div className="text-sm text-muted-foreground">Visa, Mastercard, RuPay</div>
                        </div>
                      </Label>
                    </div>
                  </Card>

                  <Card className="p-4 cursor-pointer hover:border-primary transition-all">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center gap-3 cursor-pointer flex-1">
                        <Banknote className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-semibold">Cash on Delivery</div>
                          <div className="text-sm text-muted-foreground">Pay when you receive</div>
                        </div>
                      </Label>
                    </div>
                  </Card>
                </RadioGroup>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.saree.id} className="flex gap-3">
                      <img
                        src={item.saree.images[0]}
                        alt={item.saree.name}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-semibold line-clamp-2">{item.saree.name}</div>
                        <div className="text-xs text-muted-foreground">Qty: {item.quantity}</div>
                        <div className="text-sm font-bold">
                          ₹{((item.saree.price + (item.blouse?.price || 0)) * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 border-t pt-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-emerald">Free</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax (GST 5%)</span>
                    <span>₹{Math.round(cartTotal * 0.05).toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Place Order
                </Button>
              </Card>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

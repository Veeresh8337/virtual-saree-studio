import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-8">Add some beautiful sarees to your cart!</p>
          <Button size="lg" onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart ({cartCount} items)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.saree.id} className="p-6">
                <div className="flex gap-6">
                  <img
                    src={item.saree.images[0]}
                    alt={item.saree.name}
                    className="w-32 h-40 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.saree.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.saree.fabric}</p>
                    
                    {item.blouse && (
                      <div className="text-sm bg-muted p-2 rounded mb-4">
                        <span className="font-semibold">Blouse:</span> {item.blouse.name} (+₹{item.blouse.price.toLocaleString()})
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.saree.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.saree.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.saree.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      ₹{((item.saree.price + (item.blouse?.price || 0)) * item.quantity).toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground line-through">
                      ₹{(item.saree.originalPrice * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
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
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>₹{Math.round(cartTotal * 1.05).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full mb-4" onClick={() => navigate('/checkout')}>
                Proceed to Checkout
              </Button>
              
              <Button variant="outline" size="lg" className="w-full" onClick={() => navigate('/')}>
                Continue Shopping
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

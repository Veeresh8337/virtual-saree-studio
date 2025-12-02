import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Saree, BlouseOption } from '@/types/product';
import { toast } from 'sonner';

interface CartContextType {
  cart: CartItem[];
  addToCart: (saree: Saree, blouse?: BlouseOption) => void;
  removeFromCart: (sareeId: string) => void;
  updateQuantity: (sareeId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (saree: Saree, blouse?: BlouseOption) => {
    setCart(prev => {
      const existing = prev.find(item => item.saree.id === saree.id);
      if (existing) {
        toast.success('Updated cart quantity');
        return prev.map(item =>
          item.saree.id === saree.id
            ? { ...item, quantity: item.quantity + 1, blouse: blouse || item.blouse }
            : item
        );
      }
      toast.success('Added to cart!');
      return [...prev, { saree, blouse, quantity: 1 }];
    });
  };

  const removeFromCart = (sareeId: string) => {
    setCart(prev => prev.filter(item => item.saree.id !== sareeId));
    toast.success('Removed from cart');
  };

  const updateQuantity = (sareeId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(sareeId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.saree.id === sareeId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const cartTotal = cart.reduce((sum, item) => {
    const blousePrice = item.blouse ? item.blouse.price : 0;
    return sum + (item.saree.price + blousePrice) * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

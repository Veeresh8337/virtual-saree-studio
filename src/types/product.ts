export interface Saree {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  images: string[];
  description: string;
  fabric: string;
  color: string;
  occasion: string;
  rating: number;
  reviews: number;
  discount: string;
  tag: string;
  blouseIncluded: boolean;
  suggestedBlouses?: BlouseOption[];
  inStock: boolean;
  stock: number;
}

export interface BlouseOption {
  id: string;
  name: string;
  fabric: string;
  price: number;
  image: string;
  sleeveType: string;
  neckType: string;
}

export interface CartItem {
  saree: Saree;
  blouse?: BlouseOption;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  paymentMethod: 'upi' | 'cod' | 'card';
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  date: string;
}

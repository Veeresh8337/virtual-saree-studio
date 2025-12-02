import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Heart, Share2, ShoppingBag, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { mockSarees } from '@/data/mockSarees';
import { BlouseOption } from '@/types/product';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const saree = mockSarees.find(s => s.id === id);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedBlouse, setSelectedBlouse] = useState<BlouseOption | undefined>();
  const [quantity, setQuantity] = useState(1);

  if (!saree) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % saree.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + saree.images.length) % saree.images.length);
  };

  const handleAddToCart = () => {
    addToCart(saree, selectedBlouse);
  };

  const handleBuyNow = () => {
    addToCart(saree, selectedBlouse);
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate('/')} className="mb-6">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 360° Image Gallery */}
          <div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-muted">
              <img
                src={saree.images[currentImageIndex]}
                alt={saree.name}
                className="w-full h-full object-cover"
              />
              
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                {saree.tag}
              </Badge>
              
              <Badge className="absolute top-4 right-4 bg-emerald text-emerald-foreground">
                {saree.discount}
              </Badge>

              {saree.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {saree.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex ? 'bg-primary w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {saree.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImageIndex ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">{saree.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex text-secondary text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < Math.floor(saree.rating) ? '★' : '☆'}</span>
                  ))}
                </div>
                <span className="text-muted-foreground">({saree.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-foreground">₹{saree.price.toLocaleString()}</span>
                <span className="text-xl text-muted-foreground line-through">₹{saree.originalPrice.toLocaleString()}</span>
                <Badge variant="secondary" className="bg-emerald text-emerald-foreground">
                  Save ₹{(saree.originalPrice - saree.price).toLocaleString()}
                </Badge>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{saree.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Fabric</div>
                <div className="font-semibold">{saree.fabric}</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Color</div>
                <div className="font-semibold">{saree.color}</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Occasion</div>
                <div className="font-semibold">{saree.occasion}</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Stock</div>
                <div className="font-semibold text-emerald">{saree.stock} Available</div>
              </Card>
            </div>

            {/* Blouse Matching */}
            {saree.suggestedBlouses && saree.suggestedBlouses.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Suggested Matching Blouses</h3>
                <div className="grid grid-cols-2 gap-4">
                  {saree.suggestedBlouses.map((blouse) => (
                    <Card
                      key={blouse.id}
                      className={`p-4 cursor-pointer transition-all ${
                        selectedBlouse?.id === blouse.id ? 'border-primary border-2' : ''
                      }`}
                      onClick={() => setSelectedBlouse(blouse)}
                    >
                      <img src={blouse.image} alt={blouse.name} className="w-full aspect-square object-cover rounded mb-2" />
                      <div className="text-sm font-semibold mb-1">{blouse.name}</div>
                      <div className="text-xs text-muted-foreground mb-2">{blouse.fabric}</div>
                      <div className="font-bold text-primary">+₹{blouse.price.toLocaleString()}</div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <label className="text-sm font-semibold mb-2 block">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(saree.stock, quantity + 1))}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="accent" className="flex-1" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="flex-1">
                <Heart className="w-5 h-5 mr-2" />
                Wishlist
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-semibold">Free Delivery</div>
                <div className="text-xs text-muted-foreground">On orders above ₹999</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-semibold">100% Authentic</div>
                <div className="text-xs text-muted-foreground">Quality Guaranteed</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-semibold">Easy Returns</div>
                <div className="text-xs text-muted-foreground">7 Days Return Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

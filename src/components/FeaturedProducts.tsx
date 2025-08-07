import { Button } from "@/components/ui/button";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { useState } from "react";

const featuredSarees = [
  {
    id: 1,
    name: "Royal Blue Banarasi Silk",
    price: "₹15,999",
    originalPrice: "₹19,999",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 124,
    discount: "20% OFF",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Emerald Green Kanjivaram",
    price: "₹22,999",
    originalPrice: "₹27,999",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 89,
    discount: "18% OFF",
    tag: "Premium"
  },
  {
    id: 3,
    name: "Crimson Red Wedding Saree",
    price: "₹35,999",
    originalPrice: "₹42,999",
    image: "https://images.unsplash.com/photo-1595777216528-85aa37943c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 5.0,
    reviews: 67,
    discount: "16% OFF",
    tag: "Bridal Special"
  },
  {
    id: 4,
    name: "Lavender Georgette Designer",
    price: "₹8,999",
    originalPrice: "₹11,999",
    image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 156,
    discount: "25% OFF",
    tag: "Trending"
  }
];

export const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Sarees
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our premium collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSarees.map((saree) => (
            <div 
              key={saree.id}
              className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-smooth"
              onMouseEnter={() => setHoveredProduct(saree.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {saree.tag}
                </span>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-emerald text-emerald-foreground text-xs font-bold px-2 py-1 rounded">
                  {saree.discount}
                </span>
              </div>

              {/* Product Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={saree.image} 
                  alt={saree.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                
                {/* Hover Actions */}
                <div className={`absolute inset-0 bg-black/40 transition-smooth ${
                  hoveredProduct === saree.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center gap-3">
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="hero" size="icon" className="rounded-full">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="accent" size="icon" className="rounded-full">
                      <ShoppingBag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {saree.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-secondary text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(saree.rating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({saree.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-foreground">
                    {saree.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {saree.originalPrice}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full" variant="boutique">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            View All Sarees
          </Button>
        </div>
      </div>
    </section>
  );
};
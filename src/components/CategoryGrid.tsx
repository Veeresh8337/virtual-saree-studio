import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Traditional Silk",
    description: "Handwoven silk sarees with traditional patterns",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    count: "120+ Sarees"
  },
  {
    id: 2,
    name: "Designer Collection",
    description: "Contemporary designs for modern occasions",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    count: "85+ Sarees"
  },
  {
    id: 3,
    name: "Bridal Sarees",
    description: "Exquisite sarees for your special day",
    image: "https://images.unsplash.com/photo-1595777216528-85aa37943c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    count: "45+ Sarees"
  },
  {
    id: 4,
    name: "Casual Wear",
    description: "Comfortable sarees for everyday elegance",
    image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    count: "95+ Sarees"
  }
];

export const CategoryGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of sarees for every occasion and style preference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-lg bg-gradient-card shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-white/80 mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">{category.count}</span>
                  <Button variant="secondary" size="sm" className="text-sm">
                    Browse
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
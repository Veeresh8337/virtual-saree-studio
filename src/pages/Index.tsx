import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { BlouseMatching } from "@/components/BlouseMatching";
import { VirtualTryOn } from "@/components/VirtualTryOn";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <BlouseMatching />
      <VirtualTryOn />
      <Footer />
    </div>
  );
};

export default Index;

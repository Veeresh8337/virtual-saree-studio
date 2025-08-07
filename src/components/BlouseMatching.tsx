import { Button } from "@/components/ui/button";
import blouseCollection from "@/assets/blouse-collection.jpg";

export const BlouseMatching = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Perfect Blouse
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Matching Service
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our AI-powered blouse matching service suggests the perfect blouse designs 
                that complement your chosen saree. Get personalized recommendations based on 
                color harmony, style, and occasion.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Choose Your Saree</h3>
                  <p className="text-muted-foreground">Select any saree from our collection</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Get AI Suggestions</h3>
                  <p className="text-muted-foreground">Our AI analyzes color and style patterns</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-emerald rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-foreground font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Customize & Order</h3>
                  <p className="text-muted-foreground">Personalize fit, fabric, and design details</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="px-8">
                Try Blouse Matching
              </Button>
              <Button variant="boutique" size="lg" className="px-8">
                View Blouse Collection
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={blouseCollection} 
                alt="Beautiful Blouse Collection" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-card border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Blouse Designs</div>
              </div>
            </div>
            
            {/* Floating Card 2 */}
            <div className="absolute -top-6 -right-6 bg-gradient-accent p-4 rounded-lg shadow-elegant">
              <div className="text-center">
                <div className="text-lg font-bold text-accent-foreground mb-1">AI Powered</div>
                <div className="text-xs text-accent-foreground/80">Smart Matching</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
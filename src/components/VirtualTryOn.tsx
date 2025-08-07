import { Button } from "@/components/ui/button";
import { Camera, Smartphone, Monitor, Sparkles } from "lucide-react";

export const VirtualTryOn = () => {
  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Virtual Try-On Experience
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              See Yourself in Any Saree
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of saree shopping with our virtual try-on technology. 
            See how any saree looks on you before making a purchase, right from your device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Mobile Try-On */}
          <div className="text-center p-8 bg-card rounded-lg shadow-card hover:shadow-elegant transition-smooth">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Mobile Camera</h3>
            <p className="text-muted-foreground leading-relaxed">
              Use your phone's camera for an instant virtual try-on experience. 
              Perfect for on-the-go shopping.
            </p>
          </div>

          {/* Desktop Try-On */}
          <div className="text-center p-8 bg-card rounded-lg shadow-card hover:shadow-elegant transition-smooth">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Desktop Webcam</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get a full-screen experience using your computer's webcam. 
              Perfect for detailed viewing.
            </p>
          </div>

          {/* Upload Photo */}
          <div className="text-center p-8 bg-card rounded-lg shadow-card hover:shadow-elegant transition-smooth">
            <div className="w-16 h-16 bg-gradient-emerald rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-emerald-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Upload Photo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Upload your photo and see how different sarees look on you. 
              No camera needed.
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-card rounded-lg p-8 shadow-card border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Try Our Demo
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience the magic of virtual try-on with our interactive demo. 
                See how the Royal Blue Banarasi Silk saree looks on you in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Start Virtual Try-On
                </Button>
                <Button variant="boutique" size="lg">
                  Watch Demo Video
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-muted/50 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Virtual Try-On Preview</p>
                  <p className="text-sm text-muted-foreground mt-2">Click "Start Virtual Try-On" to begin</p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-emerald text-emerald-foreground p-3 rounded-lg shadow-glow">
                <div className="text-sm font-bold">98% Accurate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">Real-time</div>
            <div className="text-sm text-muted-foreground">Instant Preview</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-2">HD Quality</div>
            <div className="text-sm text-muted-foreground">Crystal Clear</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald mb-2">AI Powered</div>
            <div className="text-sm text-muted-foreground">Smart Fitting</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-secondary mb-2">500+ Sarees</div>
            <div className="text-sm text-muted-foreground">Try Them All</div>
          </div>
        </div>
      </div>
    </section>
  );
};
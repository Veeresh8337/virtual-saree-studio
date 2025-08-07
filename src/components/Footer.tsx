import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <h3 className="text-2xl font-bold">Saree Boutique</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              Your trusted destination for authentic Indian sarees. 
              Bringing traditional elegance and modern convenience together 
              for the discerning Indian woman.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Traditional Sarees</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Designer Collection</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Bridal Sarees</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Casual Wear</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blouse Matching</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Virtual Try-On</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Customer Service</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Stay Connected</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+91 7483460029</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-4 h-4" />
                <span>veereshhindiholi8337@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Traditional Saree District, India</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-semibold">Newsletter</h5>
              <p className="text-sm text-background/80">Get updates on new arrivals and exclusive offers</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © 2024 Saree Boutique. All rights reserved. | Designed by Veeresh Hindiholi for Client Koushik
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/80 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/80 hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="text-background/80 hover:text-secondary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
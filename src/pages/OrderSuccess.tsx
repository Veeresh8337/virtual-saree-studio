import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-24 h-24 mx-auto mb-6 text-emerald" />
          <h1 className="text-4xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for your purchase. We'll send you a confirmation email shortly.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/admin')}>
              View Orders
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

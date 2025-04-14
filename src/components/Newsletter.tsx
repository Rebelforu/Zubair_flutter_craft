
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Success!",
        description: "You've successfully subscribed to the newsletter.",
      });
      setEmail('');
    } else {
      toast({
        title: "Error!",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <section className="py-16 bg-brand-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="mb-8 opacity-90">
            Stay updated with my latest projects, Flutter tips, and app development insights.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button type="submit" variant="secondary" className="bg-white text-brand-purple hover:bg-white/90 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm opacity-75">
            I respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

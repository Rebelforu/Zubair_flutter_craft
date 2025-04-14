
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-20 left-20 text-6xl">{`{ }`}</div>
        <div className="absolute bottom-20 right-20 text-6xl">{`</>`}</div>
        <div className="absolute top-1/4 right-1/3 text-4xl">Flutter</div>
        <div className="absolute bottom-1/3 left-1/4 text-4xl">Dart</div>
        <div className="absolute top-1/2 right-1/4 text-3xl">Firebase</div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl">Supabase</div>
      </div>

      <div className="container mx-auto text-center space-y-8 animate-fade-in">
        <p className="font-medium text-brand-purple uppercase tracking-wider animate-delay-100">Flutter Developer</p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-delay-200">
          <span className="gradient-text">Zubair Altaf</span>
          <br />
          <span className="mt-2 block">Crafting Apps That Inspire</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-600 animate-delay-300">
          Transforming ideas into exceptional Android and iOS applications with Flutter, Firebase, and Supabase.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 animate-delay-400">
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-6"
          >
            Explore My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-brand-orange text-brand-orange hover:text-brand-orange hover:bg-brand-orange/10 px-8 py-6"
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce-light">
        <ChevronDown 
          size={36} 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="cursor-pointer text-brand-purple opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>
    </section>
  );
};

export default Hero;

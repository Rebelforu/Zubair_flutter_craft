
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl md:text-2xl font-bold gradient-text">Zubair Altaf</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="font-medium hover:text-brand-purple transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="font-medium hover:text-brand-purple transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="font-medium hover:text-brand-purple transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="font-medium hover:text-brand-purple transition-colors">Projects</button>
            <button onClick={() => scrollToSection('testimonials')} className="font-medium hover:text-brand-purple transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-brand-purple transition-colors">Contact</button>
          </div>

          {/* Resume Button - Desktop */}
          <div className="hidden md:block">
            <Button className="bg-brand-purple hover:bg-brand-purple/90">
              <a href="#" download className="text-white">Download Resume</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="flex flex-col space-y-4 p-4">
            <button onClick={() => scrollToSection('home')} className="font-medium hover:text-brand-purple transition-colors py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="font-medium hover:text-brand-purple transition-colors py-2">About</button>
            <button onClick={() => scrollToSection('skills')} className="font-medium hover:text-brand-purple transition-colors py-2">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="font-medium hover:text-brand-purple transition-colors py-2">Projects</button>
            <button onClick={() => scrollToSection('testimonials')} className="font-medium hover:text-brand-purple transition-colors py-2">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-brand-purple transition-colors py-2">Contact</button>
            
            <Button className="w-full bg-brand-purple hover:bg-brand-purple/90">
              <a href="#" download className="text-white w-full text-center">Download Resume</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

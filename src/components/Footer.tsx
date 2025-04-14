
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="bg-brand-purple p-3 rounded-full text-white hover:bg-brand-purple/90 transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Zubair Altaf</h3>
            <p className="text-gray-300 mb-4">
              Flutter developer crafting beautiful mobile applications for Android and iOS.
            </p>
            <p className="text-gray-400">Bahawalpur, Punjab, Pakistan</p>
          </div>

          <div className="md:text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">About</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Skills</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Projects</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Contact</button>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className="text-gray-300 mb-2">
              <a href="mailto:alltafzubair845@gmail.com" className="hover:text-white transition-colors">alltafzubair845@gmail.com</a>
            </p>
            <p className="text-gray-300 mb-4">
              <a href="tel:+923020288810" className="hover:text-white transition-colors">+92 302 0288810</a>
            </p>
            <div className="flex space-x-4 md:justify-end">
              <a 
                href="https://www.instagram.com/zubair.8.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a 
                href="https://github.com/ZubairAlltaf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Zubair Altaf. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

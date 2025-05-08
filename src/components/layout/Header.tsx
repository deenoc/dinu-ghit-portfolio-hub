
import React, { useState, useEffect } from 'react';
import { getNavigationContent } from '@/utils/cms-loader';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { menuItems } = getNavigationContent();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-3 glassy shadow-md' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-heading font-bold">
          <span className="text-primary">Dinu</span> 
          <span className="text-accent">Ghit</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.link} 
                  className="nav-link font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-foreground p-2"
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden glassy py-4 px-6 shadow-md animate-fade-in-fast">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.link} 
                  className="block py-2 font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

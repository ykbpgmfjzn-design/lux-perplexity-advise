
import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, LOGO_URL } from '../constants.tsx';
import { Menu, X } from 'lucide-react';
import Button from './Button.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-[80px] md:h-[100px] flex items-center px-6 md:px-12 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        {/* Logo Container - Preserving original form without extra borders */}
        <div className="flex items-center">
          <a href="/" className="block">
            <img 
              src={LOGO_URL} 
              alt="Magnum Estate Logo" 
              className={`h-10 md:h-12 w-auto transition-all duration-300 filter ${isScrolled ? 'brightness-125' : 'brightness-100'}`} 
            />
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-6 md:space-x-12">
          <div className="hidden lg:flex items-center text-[11px] font-bold tracking-[0.25em] text-white/90 cursor-pointer">
            <span className="hover:text-[#C5A059] transition-colors">EN</span>
            <span className="mx-2 text-white/20">/</span>
            <span className="text-gray-500 hover:text-[#C5A059] transition-colors">RU</span>
          </div>

          <Button 
            className="hidden sm:flex !py-2.5 !px-10 !text-[10px] !bg-transparent border border-white/20 hover:!border-[#C5A059] transition-all duration-500"
          >
            VIEW PROJECTS
          </Button>

          <button 
            className="text-white hover:text-[#C5A059] transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={36} strokeWidth={1} /> : <Menu size={36} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#070707] z-[60] flex flex-col p-8 lg:hidden animate-in fade-in slide-in-from-top duration-500">
          <div className="flex justify-between items-center mb-20">
            <img src={LOGO_URL} alt="Logo" className="h-10 w-auto" />
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={36} strokeWidth={1} />
            </button>
          </div>
          <nav className="flex flex-col space-y-10 text-4xl font-serif text-white/90">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#C5A059] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-12 flex flex-col space-y-6">
             <Button className="w-full !py-6 text-lg">EXPLORE PORTFOLIO</Button>
             <p className="text-[10px] text-center text-white/20 tracking-[0.5em] font-bold uppercase">Magnum Estate International</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../constants.tsx';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-[72px] md:h-[88px] flex items-center px-6 md:px-12 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        <div className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-black' : 'text-white'}`}>
          LUXEDEV
        </div>

        <nav className="hidden lg:flex items-center space-x-10">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-[#C5A059] ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className={`hidden md:flex space-x-4 ${isScrolled ? 'text-black' : 'text-white'}`}>
            <Phone size={20} className="cursor-pointer hover:text-[#C5A059] transition-colors" />
            <MessageSquare size={20} className="cursor-pointer hover:text-[#C5A059] transition-colors" />
          </div>
          
          <div className={`text-xs font-bold tracking-widest cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>
            EN / <span className="text-gray-400">RU</span>
          </div>

          <Button 
            className={`hidden sm:flex !py-2 !px-6 text-[9px]`}
          >
            VIEW PROJECTS
          </Button>

          <button 
            className={`lg:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-8 lg:hidden animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-12">
            <div className="text-2xl font-serif font-bold text-black">LUXEDEV</div>
            <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          </div>
          <nav className="flex flex-col space-y-6 text-2xl font-serif">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#C5A059] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-12 border-t flex flex-col space-y-4">
             <Button className="w-full">View Projects</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

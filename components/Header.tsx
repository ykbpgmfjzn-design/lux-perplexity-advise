
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 h-[80px] md:h-[100px] flex items-center px-6 md:px-12 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
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
              className="relative z-[10000] text-white hover:text-[#C5A059] transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={36} strokeWidth={1} /> : <Menu size={36} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </header>

      {/* Premium Menu Overlay with Elegant Opening Effects */}
      {isMenuOpen && (
        <>
          {/* Backdrop with fade-in effect */}
          <div
            className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-lg"
            style={{
              animation: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Main Menu Panel */}
          <div
            className="fixed inset-y-0 right-0 z-[9999] w-full md:w-[600px] lg:w-[700px] bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] overflow-y-auto border-l border-[#C5A059]/20"
            style={{
              animation: 'slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.8), inset 1px 0 0 rgba(197, 160, 89, 0.1)'
            }}
          >
            {/* Decorative golden line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C5A059] to-transparent shadow-[0_0_20px_rgba(197,160,89,0.3)]"
              style={{
                animation: 'expandVertical 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both'
              }}
            />

            {/* Content Container */}
            <div className="relative h-full flex flex-col p-8 md:p-12 lg:p-16">
              {/* Header */}
              <div
                className="flex justify-between items-center mb-20"
                style={{
                  animation: 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both'
                }}
              >
                <img src={LOGO_URL} alt="Logo" className="h-10 md:h-12 w-auto brightness-110" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative text-white hover:text-[#C5A059] transition-all duration-500 p-3"
                  aria-label="Close menu"
                >
                  <div className="absolute inset-0 border border-white/20 group-hover:border-[#C5A059]/50 transition-all duration-500 group-hover:rotate-90" />
                  <X size={28} strokeWidth={1.5} className="relative z-10" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8 -mt-10">
                {NAVIGATION_LINKS.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative block"
                    style={{
                      animation: `fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + idx * 0.1}s both`
                    }}
                  >
                    <div className="relative overflow-hidden py-4 px-6 rounded-lg bg-white/[0.02] group-hover:bg-white/[0.05] transition-all duration-500">
                      {/* Number indicator */}
                      <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-bold tracking-[0.3em] text-[#C5A059]/50 group-hover:text-[#C5A059] transition-all duration-500">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Link text */}
                      <span className="block text-4xl md:text-5xl lg:text-6xl font-serif text-white group-hover:text-[#C5A059] transition-all duration-500 group-hover:translate-x-4 transform drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                        {link.label}
                      </span>

                      {/* Animated underline */}
                      <span className="absolute bottom-2 left-6 h-[2px] w-0 bg-gradient-to-r from-[#C5A059] via-[#e0b86a] to-transparent group-hover:w-[calc(100%-3rem)] transition-all duration-700 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />

                      {/* Hover glow effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#C5A059]/0 via-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
                    </div>
                  </a>
                ))}
              </nav>


              {/* Footer Section */}
              <div
                className="mt-auto pt-12 space-y-8 border-t border-[#C5A059]/20"
                style={{
                  animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both'
                }}
              >
                {/* CTA Button */}
                <Button
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative !py-5 !px-10 text-sm !bg-transparent border-2 border-[#C5A059]/60 hover:border-[#C5A059] !text-[#C5A059] hover:!text-black overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[0_0_30px_rgba(197,160,89,0.4)]"
                >
                  <span className="absolute inset-0 bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="relative z-10 tracking-[0.2em] font-bold">EXPLORE PORTFOLIO</span>
                </Button>

                {/* Footer Links */}
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold tracking-[0.25em] text-white/50">
                  <span className="hover:text-[#C5A059] cursor-pointer transition-colors duration-300">PRIVACY</span>
                  <span className="text-white/20">•</span>
                  <span className="hover:text-[#C5A059] cursor-pointer transition-colors duration-300">TERMS</span>
                  <span className="text-white/20">•</span>
                  <span className="hover:text-[#C5A059] cursor-pointer transition-colors duration-300">CONTACT</span>
                </div>

                {/* Copyright */}
                <p className="text-[9px] text-white/30 tracking-[0.4em] font-bold uppercase">
                  © 2026 MAGNUM ESTATE INTERNATIONAL
                </p>
              </div>
            </div>
          </div>

          {/* Keyframe Animations */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            
            @keyframes slideInRight {
              from { 
                transform: translateX(100%);
                opacity: 0;
              }
              to { 
                transform: translateX(0);
                opacity: 1;
              }
            }
            
            @keyframes fadeInDown {
              from {
                opacity: 0;
                transform: translateY(-20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes fadeInLeft {
              from {
                opacity: 0;
                transform: translateX(-30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes expandVertical {
              from {
                transform: scaleY(0);
              }
              to {
                transform: scaleY(1);
              }
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default Header;


import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { NAVIGATION_LINKS, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070707] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="inline-block">
              <img 
                src={LOGO_URL} 
                alt="Magnum Estate Logo" 
                className="h-14 w-auto" 
              />
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
              Crafting architectural legacies that redefine the standard of global luxury living through innovation and timeless design.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 hover:text-[#C5A059] transition-all"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-white/40 hover:text-[#C5A059] transition-all"><Twitter size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-white/40 hover:text-[#C5A059] transition-all"><Linkedin size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-white/40 hover:text-[#C5A059] transition-all"><Facebook size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-10 text-[#C5A059]">Quick Links</h4>
            <ul className="space-y-5">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-white transition-colors text-sm font-light tracking-wide">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-10 text-[#C5A059]">The Portfolio</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-light tracking-wide">Azure Bay Residencies</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-light tracking-wide">The Obsidian Villa</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-light tracking-wide">Pine Crest Estate</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-light tracking-wide">Metropolis Heights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-10 text-[#C5A059]">Newsletter</h4>
            <p className="text-gray-500 text-xs mb-8 leading-relaxed">Exclusive project previews and market insights delivered to our global community.</p>
            <div className="flex group border-b border-white/10 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none py-2 text-xs tracking-widest focus:ring-0 outline-none w-full placeholder:text-gray-700"
              />
              <button className="text-white hover:text-[#C5A059] transition-colors text-[10px] font-bold tracking-[0.2em]">JOIN</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">
          <div>© 2024 MAGNUM ESTATE INTERNATIONAL. ALL RIGHTS RESERVED.</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

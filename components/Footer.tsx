
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="text-3xl font-serif font-bold tracking-tighter">LUXEDEV</div>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Crafting architectural legacies that redefine the standard of global luxury living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#C5A059] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#C5A059] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-[#C5A059] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-[#C5A059] transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[#C5A059]">Quick Links</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-light">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[#C5A059]">Featured Projects</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Azure Bay Residencies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">The Obsidian Villa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Pine Crest Estate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Metropolis Heights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[#C5A059]">Newsletter</h4>
            <p className="text-gray-500 text-xs mb-6 leading-relaxed">Exclusive project previews and market insights delivered to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-[#C5A059] outline-none w-full"
              />
              <button className="bg-white text-black px-6 hover:bg-[#C5A059] hover:text-white transition-colors text-xs font-bold">JOIN</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
          <div>© 2024 LUXEDEV INTERNATIONAL. ALL RIGHTS RESERVED.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

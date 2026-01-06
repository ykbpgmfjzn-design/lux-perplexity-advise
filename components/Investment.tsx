
import React from 'react';
import { TrendingUp, ShieldCheck, Settings, Globe } from 'lucide-react';
import { INVESTMENT_CARDS } from '../constants.tsx';
import Button from './Button.tsx';

const iconMap: Record<string, any> = {
  TrendingUp,
  ShieldCheck,
  Settings,
  Globe
};

const Investment: React.FC = () => {
  return (
    <section id="investment" className="py-24 px-6 md:px-12 bg-[#111] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Invest with Confidence</h2>
            <p className="text-gray-400 text-lg font-light mb-12 leading-relaxed">
              We provide strategic assets designed to protect and grow capital across global markets.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {INVESTMENT_CARDS.map((card, i) => {
                const Icon = iconMap[card.icon];
                return (
                  <div key={i} className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
                    <Icon className="text-[#C5A059] mb-4" size={32} />
                    <div className="text-3xl font-serif mb-2">{card.value}</div>
                    <div className="text-sm font-bold tracking-widest uppercase mb-3 text-white/80">{card.title}</div>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{card.description}</p>
                  </div>
                );
              })}
            </div>

            <Button variant="secondary" className="w-full sm:w-auto">
              Request Deck
            </Button>
          </div>

          <div className="relative reveal" style={{ transitionDelay: '200ms' }}>
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200" 
              alt="Investment Analysis" 
              className="w-full grayscale opacity-60 rounded-sm"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;

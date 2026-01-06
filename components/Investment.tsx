
import React from 'react';
import { TrendingUp, ShieldCheck, Settings, Globe } from 'lucide-react';
import { INVESTMENT_CARDS, LOGO_URL } from '../constants.tsx';
import Button from './Button.tsx';
import Clock from './Clock.tsx';

const iconMap: Record<string, any> = {
  TrendingUp,
  ShieldCheck,
  Settings,
  Globe
};

const Investment: React.FC = () => {
  return (
    <section id="investment" className="py-24 px-6 md:px-12 bg-[#0d0d0d] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal">
            <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Asset Protection</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Invest with Confidence</h2>
            <p className="text-gray-400 text-lg font-light mb-12 leading-relaxed">
              At Magnum Estate, we provide strategic assets designed to protect and grow capital across global markets through meticulous selection and professional management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {INVESTMENT_CARDS.map((card, i) => {
                const Icon = iconMap[card.icon];
                return (
                  <div key={i} className="group border border-white/5 p-8 bg-white/[0.02] hover:bg-[#C5A059]/10 transition-all duration-500">
                    <Icon className="text-[#C5A059] mb-6 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                    <div className="text-3xl font-serif mb-2 tracking-wide">{card.value}</div>
                    <div className="text-sm font-bold tracking-widest uppercase mb-4 text-white/70">{card.title}</div>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">{card.description}</p>
                  </div>
                );
              })}
            </div>

            <Button variant="secondary" className="w-full sm:w-auto !border-[#C5A059]/40">
              Request Investment Deck
            </Button>
          </div>

          <div className="relative reveal flex justify-center items-center" style={{ transitionDelay: '200ms' }}>
            <Clock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;

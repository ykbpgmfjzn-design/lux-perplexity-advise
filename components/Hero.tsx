
import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './Button.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920" 
          alt="Premium Architecture" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 luxury-gradient-overlay opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-white">
        <div className="max-w-4xl reveal active">
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-serif mb-8 leading-[1] tracking-tight">
            Elevating the Art <br /> of Luxury Living
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300 mb-12 max-w-2xl leading-relaxed tracking-wide">
            Exceptional residences defined by iconic architecture, bespoke service, and unparalleled investment potential in the world's most desired locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button className="!bg-transparent border border-white/40 min-w-[200px] !text-[10px]">
              EXPLORE PORTFOLIO
            </Button>
            <Button className="!bg-transparent border border-white/20 min-w-[200px] !text-[10px] !text-white/70 hover:!text-white">
              GET PRESENTATION
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 cursor-pointer group transition-all duration-300 hover:text-white">
        <span className="text-[10px] uppercase tracking-[0.5em] mb-3 font-bold">Scroll</span>
        <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
      </div>
    </section>
  );
};

export default Hero;

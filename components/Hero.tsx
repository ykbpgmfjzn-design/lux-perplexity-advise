
import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './Button.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image / Placeholder for Video */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920" 
          alt="Premium Architecture" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 luxury-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-white">
        <div className="max-w-3xl animate-[fadeIn_1s_ease-out]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.1]">
            Elevating the Art <br /> of Luxury Living
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200 mb-10 max-w-xl leading-relaxed tracking-wide">
            Exceptional residences defined by iconic architecture, bespoke service, and unparalleled investment potential in the world's most desired locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button>
              Explore Portfolio
            </Button>
            <Button className="!border-white/40 !text-white/80 hover:!text-white">
              Get Presentation
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
};

export default Hero;

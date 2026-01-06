
import React, { useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import Investment from './components/Investment.tsx';
import Journal from './components/Journal.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Button from './components/Button.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#C5A059] selection:text-white">
      <Header />
      <main>
        <Hero />
        
        <section className="py-16 bg-white border-b border-gray-50 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="reveal">
                  <div className="text-3xl md:text-4xl font-serif mb-1">$4.2B+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Portfolio Value</div>
                </div>
                <div className="reveal" style={{ transitionDelay: '100ms' }}>
                  <div className="text-3xl md:text-4xl font-serif mb-1">12</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Award Winning Projects</div>
                </div>
                <div className="reveal" style={{ transitionDelay: '200ms' }}>
                  <div className="text-3xl md:text-4xl font-serif mb-1">850+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Luxury Units Delivered</div>
                </div>
                <div className="reveal" style={{ transitionDelay: '300ms' }}>
                  <div className="text-3xl md:text-4xl font-serif mb-1">15</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Prime Locations</div>
                </div>
             </div>
          </div>
        </section>

        <Projects />

        <section className="relative h-[80vh] bg-[#111] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600" 
            alt="Flagship Project" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
            <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 reveal">
              <div className="max-w-xl text-white">
                <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Featured Release</span>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Azure Bay Residencies</h2>
                <ul className="space-y-4 mb-10 text-gray-300 font-light list-disc list-inside">
                  <li>Direct beach access with private jetty</li>
                  <li>Architecture by Pritzker-winning studio</li>
                  <li>Estimated completion: Q4 2026</li>
                  <li>Yield potential up to 14% APR</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                   <Button>VIRTUAL TOUR</Button>
                   <Button className="!border-white/40 !text-white/80">DOWNLOAD BROCHURE</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Investment />

        <section id="about" className="py-24 px-6 md:px-12 bg-white overflow-hidden">
           <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                 <div className="lg:w-1/2 reveal">
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                      alt="The LuxeDev Spirit" 
                      className="w-full h-[400px] md:h-[600px] object-cover"
                    />
                 </div>
                 <div className="lg:w-1/2 reveal">
                    <h2 className="text-4xl md:text-5xl font-serif mb-8">Architects of <br /> the Unforgettable</h2>
                    <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                      <p>
                        Founded with a vision to transcend the ordinary, LuxeDev has grown into a world-class real estate powerhouse known for its unwavering commitment to quality.
                      </p>
                      <p>
                        Every project we undertake is a dialogue between human ambition and nature's grace. We select only the most exclusive locations.
                      </p>
                    </div>
                    <button className="mt-10 border-b-2 border-[#111] pb-2 text-sm font-bold tracking-widest hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                       OUR HISTORY & MISSION
                    </button>
                 </div>
              </div>
           </div>
        </section>

        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

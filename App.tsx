
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Investment from './components/Investment';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#C5A059] selection:text-white">
      <Header />
      <main>
        <Hero />
        
        {/* Social Proof / KPI Section */}
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

        {/* Flagship Highlight Section */}
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
                <div className="flex space-x-4">
                   <button className="bg-[#C5A059] text-white px-8 py-3 text-xs font-bold tracking-widest hover:bg-[#A88548] transition-colors">VIRTUAL TOUR</button>
                   <button className="border border-white text-white px-8 py-3 text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all">DOWNLOAD BROCHURE (PDF)</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Investment />

        {/* About the Developer */}
        <section id="about" className="py-24 px-6 md:px-12 bg-white overflow-hidden">
           <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                 <div className="lg:w-1/2 reveal">
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                      alt="The LuxeDev Spirit" 
                      className="w-full h-[600px] object-cover"
                    />
                 </div>
                 <div className="lg:w-1/2 reveal">
                    <h2 className="text-4xl md:text-5xl font-serif mb-8">Architects of <br /> the Unforgettable</h2>
                    <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                      <p>
                        Founded with a vision to transcend the ordinary, LuxeDev has grown into a world-class real estate powerhouse known for its unwavering commitment to quality and architectural integrity.
                      </p>
                      <p>
                        Every project we undertake is a dialogue between human ambition and nature's grace. We select only the most exclusive locations, ensuring that every LuxeDev address is not just a residence, but a landmark of enduring value.
                      </p>
                      <p>
                        Our philosophy is built on three pillars: visionary design, meticulous craftsmanship, and long-term partnership with our community of global investors.
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


import React from 'react';
import { ARTICLES_DATA } from '../constants.tsx';
import { ArrowRight } from 'lucide-react';

const Journal: React.FC = () => {
  return (
    <section id="journal" className="py-24 px-6 md:px-12 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-[#C5A059] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Perspective</span>
            <h2 className="text-4xl md:text-5xl font-serif">The Journal</h2>
          </div>
          <a href="#" className="hidden sm:flex items-center text-sm font-bold tracking-widest group">
            READ ALL <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ARTICLES_DATA.map((article) => (
            <article key={article.id} className="group cursor-pointer bg-white overflow-hidden hover:shadow-xl transition-shadow duration-500 reveal">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-4">
                  {article.date}
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-[#C5A059] transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-500 font-light text-sm mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="text-xs font-bold tracking-widest border-b border-black/10 pb-1 group-hover:border-[#C5A059] transition-colors">
                  READ MORE
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;

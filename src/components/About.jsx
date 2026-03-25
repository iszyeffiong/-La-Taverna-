import React from 'react';
import { motion } from 'framer-motion';

const About = ({ t }) => {
  return (
    <section id="about" className="py-24 bg-portun-card border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src="/interior.png"
              alt="Interior"
              className="w-full h-[600px] object-cover rounded-sm border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
            />
          </div>

          <div className="w-full lg:w-1/2 text-left">
            <span className="text-portun-accent font-serif italic text-xl mb-4 block">{t.badge}</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">{t.title_part1} <span className="text-portun-accent italic">{t.title_part2}</span> {t.title_part3}</h2>
            <p className="text-portun-text-muted text-lg mb-8 leading-relaxed">
              {t.description}
            </p>
            <p className="text-portun-text-muted text-lg mb-12 italic border-l-2 border-portun-accent pl-8">
              {t.quote}
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div className="flex flex-col">
                <span className="text-portun-accent font-serif text-4xl mb-1">1998</span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40">{t.established}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-portun-accent font-serif text-4xl mb-1">5★</span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40">{t.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

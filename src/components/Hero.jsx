import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenModal, t }) => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with zoom effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero.png"
          alt=" La Taverna    Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-portun-accent font-serif italic text-sm md:text-base tracking-[0.3em] block mb-4 lowercase">
            {t.subtitle}
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-5xl mx-auto uppercase">
            {t.welcome} <br />
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <button
              onClick={onOpenModal}
              className="btn-primary w-full md:w-auto text-center justify-center"
            >
              {t.cta_reserve}
            </button>
            <a href="#menu" className="w-full md:w-auto">
              <button className="btn-outline w-full text-center justify-center py-4">
                {t.cta_menu}
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm border-t border-white/10 z-20">
        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center border-r border-white/5 last:border-0 md:border-r">
            <span className="text-3xl font-serif text-portun-accent mb-1">30+ Years</span>
            <span className="text-[10px] tracking-[0.3em] font-bold text-white/50 uppercase">{t.stats.tradition}</span>
          </div>
          <div className="flex flex-col items-center border-r border-white/5 last:border-0 md:border-r">
            <span className="text-3xl font-serif text-portun-accent mb-1">100% Homegrown</span>
            <span className="text-[10px] tracking-[0.3em] font-bold text-white/50 uppercase">{t.stats.produce}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif text-portun-accent mb-1">5★ Rating</span>
            <span className="text-[10px] tracking-[0.3em] font-bold text-white/50 uppercase">{t.stats.luxury}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

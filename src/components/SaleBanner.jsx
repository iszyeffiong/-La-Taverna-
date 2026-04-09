import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    <rect width="20" height="16" x="2" y="4" rx="2" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const ArrowRightIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const SaleBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/20 relative group">
          {/* Background Highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-portun-accent/5 via-transparent to-portun-accent/5 opacity-30"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8">
            {/* Price & Title Tag */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-portun-accent text-portun-bg px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                Limited Offer
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-white text-xl md:text-2xl font-serif italic mb-1 uppercase tracking-tight">Premium Collection</h3>
                <p className="text-portun-text-muted text-[10px] uppercase tracking-[0.2em] font-medium">Exclusive Access Spot</p>
              </div>
            </div>

            {/* Main Pricing Area */}
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-4 md:gap-5">
                <span className="text-xl md:text-2xl text-portun-text-muted/50 line-through decoration-portun-accent/40 font-light">5800€</span>
                <div className="flex flex-col items-center">
                   <span className="text-5xl md:text-7xl font-serif text-portun-accent drop-shadow-2xl leading-none">999€</span>
                   <span className="text-[10px] uppercase tracking-[0.3em] text-portun-accent font-bold mt-1">Only</span>
                </div>
              </div>
            </div>

            {/* Actions & Contacts */}
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
              {/* Contact Info */}
              <div className="flex flex-col gap-3">
                <a 
                  href="mailto:buildwithwackky@gmail.com" 
                  className="flex items-center gap-3 group/item transition-colors"
                >
                  <div className="p-2 bg-white/5 group-hover/item:bg-portun-accent/20 border border-white/10 rounded-lg transition-all duration-300 text-portun-accent">
                    <MailIcon size={18} />
                  </div>
                  <span className="text-white/80 group-hover/item:text-portun-accent text-xs font-medium transition-colors">buildwithwackky@gmail.com</span>
                </a>
                <a 
                  href="https://www.instagram.com/youkehhenry?igsh=MTdvcTF1ZXdwdzNvdA%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/item transition-colors"
                >
                  <div className="p-2 bg-white/5 group-hover/item:bg-portun-accent/20 border border-white/10 rounded-lg transition-all duration-300 text-portun-accent">
                    <InstagramIcon size={18} />
                  </div>
                  <span className="text-white/80 group-hover/item:text-portun-accent text-xs font-medium transition-colors">@youkehhenry</span>
                </a>
              </div>

              {/* Primary CTA */}
              <a 
                href="mailto:buildwithwackky@gmail.com?subject=Secure My Premium Spot"
                className="btn-primary flex items-center gap-3 px-10 py-4 group/btn relative overflow-hidden"
              >
                <span className="relative z-10 font-bold tracking-widest text-sm">SECURE SPOT</span>
                <div className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300">
                  <ArrowRightIcon />
                </div>
                
                {/* Shine Effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:left-full transition-all duration-1000 ease-in-out"></div>
              </a>
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-portun-text-muted hover:text-white transition-all hover:rotate-90 duration-300"
            >
              <XIcon size={18} />
            </button>
          </div>
          
          {/* Bottom Progress Bar Decor */}
          <div className="h-[2px] w-full bg-white/5">
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 7200, ease: "linear" }}
              className="h-full bg-portun-accent shadow-[0_0_15px_#d4af37]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SaleBanner;

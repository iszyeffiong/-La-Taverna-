import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import SaleBanner from './components/SaleBanner';
import ReservationModal from './components/Reservation';
import { translations } from './translations';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lang, setLang] = useState('IT');

  const t = translations[lang];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-portun-bg selection:bg-portun-accent selection:text-portun-bg overflow-x-hidden">
      <Navbar 
        onOpenModal={openModal} 
        lang={lang} 
        setLang={setLang} 
        t={t.nav} 
      />
      <main>
        <Hero 
          onOpenModal={openModal} 
          t={t.hero} 
        />
        <About t={t.about} />
        <Menu t={t.menu} />
        
        {/* Reservation Section Decoration */}
        <section className="py-24 bg-portun-bg border-y border-white/5 relative flex items-center justify-center overflow-hidden">
           {/* Visual Decor */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/interior.png')] bg-cover bg-center grayscale scale-110 pointer-events-none"></div>
           
           <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-4xl md:text-7xl font-serif mb-12 uppercase italic text-portun-accent tracking-tighter">THE PERFECT EXPERIENCE</h2>
              <p className="text-portun-text-muted text-xl mb-16 max-w-2xl mx-auto italic">
                {t.footer.hospitality}
              </p>
              <button 
                onClick={openModal}
                className="btn-primary"
              >
                 {t.hero.cta_reserve}
              </button>
           </div>
        </section>
      </main>
      <Footer t={t.footer} />
      <SaleBanner />

      {/* Global Modal */}
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        t={t.reservation} 
      />
    </div>
  );
}

export default App;

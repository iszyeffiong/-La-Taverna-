import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

const Navbar = ({ onOpenModal, lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.menu, href: '#menu' },
    { name: t.gallery, href: '#gallery' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-portun-bg/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt=" La Taverna    Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-bold tracking-[0.2em] text-white hover:text-portun-accent transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-white/20 mx-2"></div>

          {/* Lang Toggle */}
          <div className="flex gap-2 text-xs font-bold tracking-widest">
            <button
              onClick={() => setLang('EN')}
              className={`hover:text-portun-accent transition-colors ${lang === 'EN' ? 'text-portun-accent' : 'text-white'}`}
            >
              EN
            </button>
            <span className="text-white/30">/</span>
            <button
              onClick={() => setLang('IT')}
              className={`hover:text-portun-accent transition-colors ${lang === 'IT' ? 'text-portun-accent' : 'text-white'}`}
            >
              IT
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenModal}
            className="btn-primary"
          >
            {t.reserve}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white hover:text-portun-accent transition-colors">
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-portun-bg z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white hover:text-portun-accent">
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif tracking-widest text-white hover:text-portun-accent">
            {link.name}
          </a>
        ))}

        {/* Mobile Lang Toggle */}
        <div className="flex gap-4 text-sm font-bold tracking-widest mt-4">
          <button onClick={() => setLang('EN')} className={lang === 'EN' ? 'text-portun-accent' : 'text-white'}>EN</button>
          <span className="text-white/20">|</span>
          <button onClick={() => setLang('IT')} className={lang === 'IT' ? 'text-portun-accent' : 'text-white'}>IT</button>
        </div>

        <div className="flex gap-6 mt-8">
          <a
            href="https://www.instagram.com/ La Taverna rosolina/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-portun-accent transition-colors"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <div className="w-7 h-7 rounded-sm border border-white/20 opacity-20"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

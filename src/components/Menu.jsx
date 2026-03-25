import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  Food: {
    Starters: [
      { name: 'Bruschetta al Pomodoro', description: 'Toasted artisan bread with organic vine-ripened tomatoes and fresh basil.', price: '12€' },
      { name: 'Insalata di Polpo', description: 'Tender Mediterranean octopus, cherry tomatoes, olives, and citrus vinaigrette.', price: '18€' },
      { name: 'Cozze alla Marinara', description: 'Local mussels steamed with garlic, flat-leaf parsley, and Venetian white wine.', price: '16€' },
    ],
    "Main Course": [
      { name: 'Branzino alla Griglia', description: 'Freshly caught sea bass, served with traditional Mediterranean vegetables.', price: '28€' },
      { name: 'Risotto al Nero di Seppia', description: 'Traditional cuttlefish risotto with natural ink, garlic, and aged parmesan.', price: '22€' },
      { name: 'Tagliata di Tonno', description: 'Sesame-crusted seared tuna steaks with balsamic reduction.', price: '34€' },
    ],
  },
  Wine: {
    "Red Wine": [
      { name: 'Valpolicella Ripasso', description: 'Elegant Venetian red, rich with notes of dark cherry and spice.', price: '35€' },
      { name: 'Amarone della Valpolicella', description: 'Iconic full-bodied reserve with intense dried fruit complexity.', price: '85€' },
    ],
    "White Wine": [
      { name: 'Lugana DOC Prestige', description: 'Sophisticated white from Lake Garda, floral and mineral.', price: '40€' },
      { name: 'Vermentino di Toscana', description: 'Crisp and refreshing with notes of Mediterranean herbs.', price: '38€' },
    ],
  },
  Drinks: {
    Cocktails: [
      { name: 'Rosolina Spritz', description: 'Artisan Prosecco, Aperol, organic soda, and a twist of local orange.', price: '12€' },
      { name: 'Negroni Classico', description: 'A perfectly balanced gin, vermouth, and bitters masterpiece.', price: '15€' },
    ],
    Refreshments: [
      { name: 'Limonata Fatta in Casa', description: 'Hand-pressed local lemons with natural honey syrup.', price: '6€' },
      { name: 'Acqua Minerale Panna', description: 'Premium still mineral water from the heart of Tuscany.', price: '7€' },
    ],
  }
};

const Menu = ({ t }) => {
  const [activeTab, setActiveTab] = useState('Food');
  const [activeCategory, setActiveCategory] = useState(Object.keys(menuData['Food'])[0]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveCategory(Object.keys(menuData[tab])[0]);
  };

  return (
    <section id="menu" className="py-24 bg-portun-bg">
      <div className="container mx-auto px-6">
        <h2 className="section-title">{t.title_part1} <span>{t.title_part2}</span> {t.title_part3}</h2>

        {/* Major Tabs */}
        <div className="flex justify-center flex-wrap gap-8 mb-12">
            {Object.keys(menuData).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`text-xl font-serif tracking-widest pb-2 border-b-2 transition-all duration-300 uppercase ${activeTab === tab ? 'text-portun-accent border-portun-accent' : 'text-white/40 border-transparent hover:text-white'}`}
              >
                {t.tabs[tab.toLowerCase()]}
              </button>
            ))}
        </div>

        {/* Categories Pills */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {Object.keys(menuData[activeTab]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full border text-[10px] tracking-[0.2em] font-bold uppercase transition-all duration-300 ${activeCategory === cat ? 'bg-portun-accent text-portun-bg border-portun-accent' : 'bg-transparent text-white/50 border-white/20 hover:border-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
             <motion.div
               key={activeCategory}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.4 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
             >
               {menuData[activeTab][activeCategory].map((item, idx) => (
                 <div key={idx} className="group cursor-default">
                    <div className="flex justify-between items-end mb-2">
                       <h4 className="text-xl font-serif text-white group-hover:text-portun-accent transition-colors">{item.name}</h4>
                       <div className="flex-grow border-b border-dashed border-white/10 mx-4 mb-1"></div>
                       <span className="text-portun-accent font-serif text-lg">{item.price}</span>
                    </div>
                    <p className="text-sm font-sans text-portun-text-muted italic">{item.description}</p>
                 </div>
               ))}
             </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
           <img 
            src="/seafood.png" 
            alt="Menu Highlight" 
            className="w-full max-w-4xl mx-auto h-[400px] object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;

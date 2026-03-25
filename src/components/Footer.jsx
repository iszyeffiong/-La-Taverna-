import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ t }) => {
  return (
    <footer id="contact" className="bg-portun-bg py-24 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
          <div>
            <div className="flex justify-center md:justify-start">
              <img
                src="/logo.png"
                alt=" La Taverna    Logo"
                className="h-24 w-auto object-contain mb-8"
              />
            </div>
            <p className="text-sm font-sans text-portun-text-muted leading-7 mb-8">
              {t.address} <br />
              {t.hospitality}
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/ La Taverna rosolina/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-portun-accent transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <div className="w-6 h-6 rounded-sm border border-white/20 opacity-20"></div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8 border-b border-white/10 pb-4 inline-block">{t.hours_title}</h4>
            <ul className="text-sm text-portun-text-muted space-y-4">
              <li className="flex justify-between items-center group">
                <span>{t.mon_fri}</span>
                <span className="text-portun-accent group-hover:text-white transition-colors">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between items-center group">
                <span>{t.sat_sun}</span>
                <span className="text-portun-accent group-hover:text-white transition-colors">12:00 - 00:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8 border-b border-white/10 pb-4 inline-block">{t.contact_title}</h4>
            <ul className="text-sm text-portun-text-muted space-y-4">
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                <Phone size={16} className="text-portun-accent" />
                <span>+39 042668194</span>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                <Mail size={16} className="text-portun-accent" />
                <span>taverna.dolina@hotmail.com</span>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                <MapPin size={16} className="text-portun-accent" />
                <span>Str. Sud 204, Rosolina 45010</span>
              </li> La Taverna
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8 border-b border-white/10 pb-4 inline-block">{t.newsletter_title}</h4>
            <p className="text-sm text-portun-text-muted mb-6">{t.newsletter_desc}</p>
            <div className="flex border border-white/10 p-1 rounded-sm focus-within:border-portun-accent transition-colors">
              <input
                type="email"
                placeholder="email..."
                className="bg-transparent text-sm px-4 py-2 outline-none w-full border-0 text-white placeholder-white/20"
              />
              <button className="bg-portun-accent text-portun-bg p-2 px-4 hover:bg-portun-accent-dim transition-all text-xs font-bold uppercase">
                {t.newsletter_btn}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <span className="text-[10px] tracking-[0.5em] font-bold text-white/30 uppercase cursor-pointer hover:text-portun-accent transition-colors">
            {t.copyright}
          </span>
        </div>
      </div>

      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-portun-accent/5 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;

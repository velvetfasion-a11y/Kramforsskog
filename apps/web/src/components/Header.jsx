
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/contact';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f2e] border-b border-white/10">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-white hover:text-white/90 transition-colors duration-200"
          >
            Kramfors Skog AB
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Hem
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Tjänster
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Kontakt
            </button>
          </nav>

          <Button
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-6"
            asChild
          >
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Ring nu</span>
              <span className="sr-only">{PHONE_DISPLAY}</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

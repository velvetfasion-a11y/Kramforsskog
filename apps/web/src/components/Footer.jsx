
import React from 'react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/contact';

function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white/80 border-t border-white/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold text-white">Kramfors Skog AB</span>
            <p className="mt-4 text-sm">
              Professionell trädfällning och skogsvård för fastigheter i alla storlekar.
            </p>
          </div>

          <div>
            <span className="font-semibold text-white block mb-4">Kontakt</span>
            <p className="text-sm">E-post: info@kramforsskog.se</p>
            <p className="text-sm mt-2">
              Telefon:{' '}
              <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors duration-200">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>

          <div>
            <span className="font-semibold text-white block mb-4">Juridik</span>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Integritetspolicy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Användarvillkor
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Kramfors Skog AB. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

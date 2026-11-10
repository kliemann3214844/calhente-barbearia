import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

export const WHATSAPP_NUMBER = '554398044343';
export const WHATSAPP_DISPLAY = '(43) 9804-4343';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Gostaria de agendar um horário na Calhente Barbearia.'
)}`;

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0E0E1A]/95 backdrop-blur-md border-b border-[#D4AF37]/15 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0B14]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand Zone */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
            aria-label="Calhente Barbearia - Início"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
              CALHENTE
            </span>
            <span className="text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-light hidden sm:inline">
              Barbearia
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line text nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a
              href="#inicio"
              className="text-gray-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-gray-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
            >
              Serviços
            </a>
            <a
              href="#tradicao"
              className="text-gray-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
            >
              Tradição
            </a>
            <a
              href="#agendamento"
              className="text-gray-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
            >
              Agendamento
            </a>
            <a
              href="#contato"
              className="text-gray-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
            >
              Contato
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B14] bg-[#D4AF37] hover:bg-[#F6E6B4] transition-all duration-200 shadow-md hover:shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full text-[#D4AF37] bg-[#1A1A2E] border border-[#D4AF37]/30 hover:border-[#D4AF37]"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E0E1A]/98 border-b border-[#D4AF37]/20 px-6 py-6 mt-3 space-y-4">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#D4AF37] py-1 transition-colors"
          >
            Início
          </a>
          <a
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#D4AF37] py-1 transition-colors"
          >
            Serviços
          </a>
          <a
            href="#tradicao"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#D4AF37] py-1 transition-colors"
          >
            Tradição
          </a>
          <a
            href="#agendamento"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#D4AF37] py-1 transition-colors"
          >
            Agendamento
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#D4AF37] py-1 transition-colors"
          >
            Contato & Endereço
          </a>
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B14] bg-[#D4AF37] hover:bg-[#F6E6B4] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

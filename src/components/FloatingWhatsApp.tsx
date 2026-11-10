import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './Navbar';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp da Calhente Barbearia"
        className="flex items-center gap-2.5 bg-[#D4AF37] hover:bg-[#F6E6B4] text-[#0B0B14] px-4 py-3 rounded-full shadow-2xl hover:shadow-[#D4AF37]/40 transition-all duration-300 hover:scale-105 active:scale-95 border border-[#FFF7D6]/30"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline whitespace-nowrap">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
};

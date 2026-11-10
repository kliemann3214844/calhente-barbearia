import React from 'react';
import { ArrowUp, MapPin, Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from './Navbar';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080E] text-gray-400 text-xs border-t border-[#D4AF37]/15 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                CALHENTE
              </span>
              <span className="text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-light">
                Barbearia
              </span>
            </div>
            <p className="text-gray-400 font-light max-w-sm text-sm leading-relaxed">
              Estilo e tradição em cada detalhe. O refúgio definitivo para o homem contemporâneo em Arapongas, PR.
            </p>
            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#F6E6B4] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 font-light">
              <li>
                <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#D4AF37] transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#tradicao" className="hover:text-[#D4AF37] transition-colors">
                  Tradição & Números
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-[#D4AF37] transition-colors">
                  Agendar Horário
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#D4AF37] transition-colors">
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Localização rápida */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Visite a Barbearia
            </h4>
            <div className="space-y-2 text-sm font-light">
              <p className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Rua Japim, 196, Jd Bandeirantes — Arapongas PR</span>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{WHATSAPP_DISPLAY}</span>
              </p>
            </div>

            {/* Hosting ZIP download box */}
            <div className="p-4 rounded-xl bg-[#141424] border border-[#D4AF37]/30 space-y-2 mt-4">
              <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span>Arquivos ZIP para Hospedagem:</span>
              </p>
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="/calhente-barbearia-dist-pronto-para-hospedar.zip"
                  download="calhente-barbearia-dist-pronto-para-hospedar.zip"
                  className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-[#1A1A2E] hover:bg-[#D4AF37] text-gray-200 hover:text-[#0B0B14] border border-[#D4AF37]/30 hover:border-transparent transition-all text-[11px] font-medium"
                >
                  <span>📦 ZIP Netlify Drop (Pronto)</span>
                  <span className="text-[10px] opacity-75">~2.0 MB</span>
                </a>
                <a
                  href="/calhente-barbearia-projeto-completo.zip"
                  download="calhente-barbearia-projeto-completo.zip"
                  className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-[#1A1A2E] hover:bg-[#D4AF37] text-gray-200 hover:text-[#0B0B14] border border-[#D4AF37]/30 hover:border-transparent transition-all text-[11px] font-medium"
                >
                  <span>💻 ZIP Código Fonte (Lovable/GitHub)</span>
                  <span className="text-[10px] opacity-75">~2.7 MB</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Calhente Barbearia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">Arapongas — Paraná</span>
            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-2 rounded-full bg-[#141424] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B14] border border-[#D4AF37]/20 transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

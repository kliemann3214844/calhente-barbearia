import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowDown, ChevronRight } from 'lucide-react';
import { WHATSAPP_URL } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background with measured luxury scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/barbershop_hero_main_1794260680932.jpg"
          alt="Ambiente sofisticado da Calhente Barbearia"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered radial and linear dark navy scrims for 100% text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14] via-[#0B0B14]/85 to-[#0B0B14]/50" />
        <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-[#0B0B14]/60 to-[#0B0B14]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Quiet unboxed kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D4AF37] font-semibold mb-6"
        >
          <span>Arapongas, PR</span>
          <span aria-hidden="true" className="text-gray-600">·</span>
          <span>Desde as Origens</span>
          <span aria-hidden="true" className="text-gray-600">·</span>
          <span>Barbearia de Cavalheiros</span>
        </motion.div>

        {/* Big confident display title with Gold gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05] mb-6"
        >
          <span className="text-gold-gradient drop-shadow-md">
            Estilo & Tradição
          </span>
        </motion.h1>

        {/* Single support phrase (concise, max 8 words) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
        >
          A arte clássica da barbearia em cada detalhe.
        </motion.p>

        {/* Action Button: Dominant, unmistakable CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-[#0B0B14] bg-[#D4AF37] hover:bg-[#F6E6B4] shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Agende seu Horário</span>
          </a>

          <a
            href="#servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium tracking-wide text-gray-300 hover:text-white bg-[#1A1A2E]/70 hover:bg-[#1A1A2E] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-300"
          >
            <span>Conhecer Serviços</span>
            <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </motion.div>

        {/* Quiet proof bar below fold preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-gray-400 tracking-wide font-light"
        >
          <span>Atendimento Personalizado</span>
          <span aria-hidden="true" className="text-[#D4AF37]/40 hidden sm:inline">•</span>
          <span>Toalha Quente & Navalha</span>
          <span aria-hidden="true" className="text-[#D4AF37]/40 hidden sm:inline">•</span>
          <span>Ambiente Climatizado</span>
          <span aria-hidden="true" className="text-[#D4AF37]/40 hidden sm:inline">•</span>
          <span>Café & Lounge</span>
        </motion.div>
      </div>

      {/* Down arrow indicator inviting scroll to next section */}
      <a
        href="#servicos"
        aria-label="Rolar para os serviços"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 hover:text-[#D4AF37] transition-colors p-2"
      >
        <ArrowDown className="w-5 h-5 animate-bounce text-[#D4AF37]" />
      </a>
    </section>
  );
};

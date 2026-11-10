import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { WHATSAPP_NUMBER } from './Navbar';

export const SERVICES: ServiceItem[] = [
  {
    id: 'corte',
    name: 'Corte Masculino',
    price: 'R$ 60',
    priceNumber: 60,
    duration: '45 min',
    description: 'Análise visagista, corte minucioso com tesoura e navalha, lavagem refrescante e finalização com pomada artesanal.',
    image: '/src/assets/images/service_corte_masculino_1794260682309.jpg',
  },
  {
    id: 'barba',
    name: 'Barba Tradicional',
    price: 'R$ 45',
    priceNumber: 45,
    duration: '35 min',
    description: 'Ritual clássico com toalha quente aromatizada, lâmina de precisão, esfoliação suave e bálsamo hidratante nobre.',
    image: '/src/assets/images/service_barba_navalha_1794260681912.jpg',
  },
  {
    id: 'tratamento',
    name: 'Tratamento Capilar',
    price: 'R$ 80',
    priceNumber: 80,
    duration: '50 min',
    description: 'Terapia profunda do couro cabeludo, higienização com óleos essenciais, massagem estimulante e nutrição dos fios.',
    image: '/src/assets/images/service_tratamento_capilar_1794260683160.jpg',
  },
];

interface ServicesProps {
  onSelectService?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeService, setActiveService] = useState<string>('corte');

  const handleBooking = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.id);
    }
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      const text = encodeURIComponent(
        `Olá! Gostaria de agendar o serviço *${service.name}* (${service.price}) na Calhente Barbearia.`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    }
  };

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-[#0E0E1A] relative">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1A1A2E] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header with generous whitespace */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#D4AF37]/15">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold mb-3">
              <span>Cardápio de Serviços</span>
              <span aria-hidden="true" className="text-gray-600">·</span>
              <span>Precisão Artesanal</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Nossos <span className="text-gold-gradient">Serviços</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm sm:text-base leading-relaxed font-light">
            Técnicas tradicionais com conforto contemporâneo. Cada atendimento é um ritual de renovação pessoal.
          </p>
        </div>

        {/* 3 Marquee Service Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const isHighlighted = activeService === service.id;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setActiveService(service.id)}
                className={`group relative flex flex-col bg-[#141424] rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isHighlighted
                    ? 'border-[#D4AF37]/50 shadow-xl shadow-[#D4AF37]/10 -translate-y-1'
                    : 'border-[#D4AF37]/15 hover:border-[#D4AF37]/35'
                }`}
              >
                {/* Large high-fidelity photo container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1A1A2E]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141424] via-[#141424]/30 to-transparent" />

                  {/* Clean unboxed price tag */}
                  <div className="absolute top-4 right-4 bg-[#0B0B14]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 shadow-md">
                    <span className="font-serif text-lg font-bold text-[#F6E6B4] tabular-nums">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Card Content with generous breathing room */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed metadata separator */}
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium tracking-wider uppercase mb-2">
                      <span>Ritual Premium</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.duration}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#F6E6B4] transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Action row */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Produtos Exclusivos</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleBooking(service)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#F6E6B4] group/btn transition-colors cursor-pointer py-2 px-3 rounded-lg hover:bg-[#D4AF37]/10"
                    >
                      <span>Agendar</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Experience highlights banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#1A1A2E]/50 border border-[#D4AF37]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-white">
                Combo Completo Calhente
              </h4>
              <p className="text-sm text-gray-300 font-light">
                Corte + Barba + Tratamento Revitalizante com condição especial no agendamento antecipado.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Olá! Gostaria de agendar o Combo Completo (Corte + Barba + Tratamento) na Calhente Barbearia.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B14] bg-[#D4AF37] hover:bg-[#F6E6B4] transition-all whitespace-nowrap shrink-0 shadow-lg hover:scale-[1.02]"
          >
            <span>Consultar Combo no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Clock, Users, Award } from 'lucide-react';
import { WHATSAPP_URL } from './Navbar';

export const About: React.FC = () => {
  const stats = [
    {
      value: '15+',
      label: 'Anos de Experiência',
      detail: 'Mestria consolidada',
      icon: Clock,
    },
    {
      value: '10.000+',
      label: 'Clientes Atendidos',
      detail: 'Fidelidade e confiança',
      icon: Users,
    },
    {
      value: '5',
      label: 'Barbeiros Especialistas',
      detail: 'Equipe altamente treinada',
      icon: Award,
    },
    {
      value: '4.9',
      label: 'Nota de Avaliação',
      detail: 'Reconhecimento comprovado',
      icon: Star,
    },
  ];

  return (
    <section id="tradicao" className="py-24 sm:py-32 bg-[#0B0B14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big high-fidelity atmospheric lounge image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/25 shadow-2xl bg-[#1A1A2E]">
              <img
                src="/src/assets/images/barbershop_ambient_lounge_1794260683599.jpg"
                alt="Ambiente exclusivo e lounge da Calhente Barbearia"
                className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14]/80 via-transparent to-transparent" />

              {/* Quiet caption badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0E0E1A]/90 backdrop-blur-md border border-[#D4AF37]/20 flex items-center justify-between">
                <div>
                  <p className="font-serif text-sm font-semibold text-white">Lounge Calhente</p>
                  <p className="text-xs text-gray-400">Café expresso, cerveja gelada & poltronas em couro</p>
                </div>
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold font-mono">4.9/5.0</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative geometric border backdrop */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/15 rounded-2xl -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial story & 4 verified statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Unboxed kicker */}
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold mb-4">
              <span>Tradição & Excelência</span>
              <span aria-hidden="true" className="text-gray-600">·</span>
              <span>Arapongas PR</span>
            </div>

            {/* Headline max 6 words */}
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              A Arte do Cuidado <br />
              <span className="text-gold-gradient">sem Apressar o Tempo</span>
            </h2>

            {/* Clean, short copy */}
            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              A Calhente Barbearia nasceu para resgatar o verdadeiro ritual masculino. Aqui, navalha afiada, toalha quente e atendimento com hora marcada se unem para oferecer uma pausa no seu dia com precisão absoluta.
            </p>

            <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
              Cada cliente é atendido de forma individual, respeitando seu estilo, formato de rosto e preferências de barba e cabelo.
            </p>

            {/* The 4 Required Statistics with Tabular Figures */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-white/10">
              {stats.map((stat) => {
                return (
                  <div
                    key={stat.label}
                    className="p-4 sm:p-5 rounded-xl bg-[#141424] border border-[#D4AF37]/15"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F6E6B4] font-mono tabular-nums">
                        {stat.value}
                      </span>
                      <stat.icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-gray-400 font-light mt-0.5">
                      {stat.detail}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro CTA */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B0B14] bg-[#D4AF37] hover:bg-[#F6E6B4] px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02]"
              >
                <span>Venha nos Conhecer</span>
              </a>
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                Horário exclusivo garantido
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

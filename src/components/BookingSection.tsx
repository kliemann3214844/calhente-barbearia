import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  User,
  Scissors,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from './Navbar';
import { SERVICES } from './Services';

interface BookingSectionProps {
  selectedServiceId: string;
  onSelectService: (id: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceId,
  onSelectService,
}) => {
  const [selectedBarber, setSelectedBarber] = useState('Primeiro Especialista Disponível');
  const [selectedDate, setSelectedDate] = useState('Hoje');
  const [selectedPeriod, setSelectedPeriod] = useState('Tarde (13h às 18h)');
  const [clientName, setClientName] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const barbers = [
    'Primeiro Especialista Disponível',
    'Mestre da Navalha (Equipe Sênior)',
    'Especialista em Degradê & Fade',
    'Especialista em Barboterapia',
  ];

  const dateOptions = [
    'Hoje',
    'Amanhã',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  const periodOptions = [
    'Manhã (09h às 12h)',
    'Tarde (13h às 18h)',
    'Noite (18h às 20h)',
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName.trim()) {
      setErrorMessage('Por favor, informe seu nome para o agendamento.');
      return;
    }

    setErrorMessage('');
    const serviceObj = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

    const messageLines = [
      '👋 Olá! Gostaria de agendar um horário na *Calhente Barbearia*:',
      '',
      `💈 *Serviço:* ${serviceObj.name} (${serviceObj.price})`,
      `✂️ *Profissional:* ${selectedBarber}`,
      `📅 *Data desejada:* ${selectedDate}`,
      `⏰ *Período:* ${selectedPeriod}`,
      `👤 *Cliente:* ${clientName.trim()}`,
      clientNotes ? `📝 *Observação:* ${clientNotes.trim()}` : '',
      '',
      '📍 Unidade: Rua Japim, 196 - Arapongas PR',
      'Aguardo a confirmação do horário disponível!',
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      messageLines.join('\n')
    )}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="agendamento" className="py-24 sm:py-32 bg-[#0E0E1A] relative">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold mb-3">
            <span>Atendimento Rápido</span>
            <span aria-hidden="true" className="text-gray-600">·</span>
            <span>Sem Espera</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Agende seu <span className="text-gold-gradient">Horário</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Selecione suas preferências e confirme instantaneamente pelo WhatsApp oficial da Calhente.
          </p>
        </div>

        {/* 2-Column Grid: Interactive Booking Form + Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#141424] rounded-2xl border border-[#D4AF37]/25 p-7 sm:p-10 shadow-2xl relative"
          >
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              {/* 1. Escolha de Serviço */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3 flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-[#D4AF37]" />
                  <span>1. Escolha o Serviço</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SERVICES.map((service) => {
                    const isSelected = selectedServiceId === service.id;
                    return (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => onSelectService(service.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1A1A2E] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                            : 'bg-[#0E0E1A]/60 border-white/10 hover:border-[#D4AF37]/40'
                        }`}
                      >
                        <div className="text-xs text-gray-400 font-light">{service.duration}</div>
                        <div className="text-sm font-semibold text-white mt-0.5 truncate">
                          {service.name}
                        </div>
                        <div className="text-xs font-serif font-bold text-[#F6E6B4] mt-1">
                          {service.price}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Preferência de Barbeiro */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#D4AF37]" />
                  <span>2. Especialista</span>
                </label>
                <select
                  value={selectedBarber}
                  onChange={(e) => setSelectedBarber(e.target.value)}
                  className="w-full bg-[#0E0E1A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-gray-200 outline-none transition-colors"
                >
                  {barbers.map((barber) => (
                    <option key={barber} value={barber} className="bg-[#0E0E1A] text-white">
                      {barber}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Data e Período */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>3. Dia Desejado</span>
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#0E0E1A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-gray-200 outline-none transition-colors"
                  >
                    {dateOptions.map((date) => (
                      <option key={date} value={date} className="bg-[#0E0E1A] text-white">
                        {date}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>Período</span>
                  </label>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="w-full bg-[#0E0E1A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-gray-200 outline-none transition-colors"
                  >
                    {periodOptions.map((period) => (
                      <option key={period} value={period} className="bg-[#0E0E1A] text-white">
                        {period}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 4. Nome e Detalhes */}
              <div>
                <label
                  htmlFor="clientNameInput"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2"
                >
                  4. Seu Nome Completo <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  id="clientNameInput"
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Silva"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#0E0E1A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="clientNotesInput"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2"
                >
                  Observações (Opcional)
                </label>
                <input
                  id="clientNotesInput"
                  type="text"
                  placeholder="Ex: Primeira vez na barbearia, preferência por degradê baixo..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full bg-[#0E0E1A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-rose-400 font-medium">{errorMessage}</p>
              )}

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-[#0B0B14] bg-[#D4AF37] hover:bg-[#F6E6B4] shadow-xl hover:shadow-[#D4AF37]/25 transition-all duration-300 cursor-pointer active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Confirmar Agendamento no WhatsApp</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Abrindo WhatsApp com sua solicitação de horário pronta para envio...
                  </span>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Details & Direct WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="contato"
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Contact Card */}
            <div className="bg-[#141424] rounded-2xl border border-[#D4AF37]/20 p-7 sm:p-8">
              <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold mb-4">
                <span>Localização & Contato</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Calhente Barbearia
              </h3>

              <div className="space-y-5 text-sm">
                {/* Endereço */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#1A1A2E] text-[#D4AF37] shrink-0 border border-[#D4AF37]/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-400 font-semibold mb-0.5">
                      Endereço
                    </span>
                    <p className="text-gray-200 font-medium">
                      Rua Japim, 196, Jd Bandeirantes
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">Arapongas — PR</p>
                    <a
                      href="https://maps.google.com/?q=Rua+Japim,+196,+Jardim+Bandeirantes,+Arapongas+PR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#D4AF37] hover:underline mt-2 font-medium"
                    >
                      <span>Abrir no Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
                  <div className="p-2.5 rounded-lg bg-[#1A1A2E] text-[#D4AF37] shrink-0 border border-[#D4AF37]/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-400 font-semibold mb-0.5">
                      Telefone & WhatsApp
                    </span>
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      className="text-gray-200 font-semibold hover:text-[#D4AF37] transition-colors"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                    <p className="text-gray-400 text-xs mt-0.5">Atendimento ágil para agendamentos</p>
                  </div>
                </div>

                {/* Direct WhatsApp Action */}
                <div className="pt-4 border-t border-white/5">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      'Olá! Gostaria de conversar com a equipe da Calhente Barbearia.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-white bg-[#1A1A2E] hover:bg-[#252542] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                    <span>Conversar no WhatsApp Agora</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick summary of selected service */}
            <div className="p-6 rounded-2xl bg-[#1A1A2E]/50 border border-white/10">
              <div className="text-xs uppercase text-gray-400 font-medium mb-1">
                Serviço em destaque
              </div>
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-white">
                  {currentService.name}
                </span>
                <span className="font-serif text-lg font-bold text-[#F6E6B4] font-mono tabular-nums">
                  {currentService.price}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-light mt-1">
                {currentService.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

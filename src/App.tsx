import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('corte');

  return (
    <div className="min-h-screen bg-[#0B0B14] text-[#E2E8F0] selection:bg-[#D4AF37] selection:text-[#0B0B14]">
      {/* Top Bar Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Nossos Serviços Section */}
        <Services onSelectService={(id) => setSelectedServiceId(id)} />

        {/* Sobre Nós / Tradição Section */}
        <About />

        {/* Agendamento Online & Contato Section */}
        <BookingSection
          selectedServiceId={selectedServiceId}
          onSelectService={(id) => setSelectedServiceId(id)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ServicesSection } from './components/ServicesSection';
import { ProjectCalculator } from './components/ProjectCalculator';
import { ProcessSection } from './components/ProcessSection';
import { TechStackSection } from './components/TechStackSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [contactPreset, setContactPreset] = useState<string>('');

  const handleOpenContactWithPreset = (presetMessage?: string) => {
    if (presetMessage) {
      setContactPreset(presetMessage);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCalculatorPreset = (summary: string) => {
    setContactPreset(summary);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#e8e8ed] selection:bg-[#daa520] selection:text-[#050507]">
      {/* Top Navbar */}
      <Navbar onOpenContact={handleOpenContactWithPreset} />

      {/* Hero Header */}
      <main>
        <Hero onOpenContact={handleOpenContactWithPreset} />

        {/* Project Showcase Section */}
        <ProjectShowcase onRequestProject={handleOpenContactWithPreset} />

        {/* Services & Packages */}
        <ServicesSection onSelectService={handleOpenContactWithPreset} />

        {/* Interactive Cost & Timeline Calculator */}
        <ProjectCalculator onApplyCalculation={handleCalculatorPreset} />

        {/* 5-Step Process */}
        <ProcessSection />

        {/* Technology Stack & Benchmark */}
        <TechStackSection />

        {/* Client Reviews */}
        <TestimonialsSection />

        {/* FAQ */}
        <FAQSection />

        {/* Contact & Lead Capture Form */}
        <ContactSection presetMessage={contactPreset} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


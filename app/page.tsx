'use client';

import { Navbar } from '@/components/layout/Navbar';
import { SectionDivider } from '@/components/layout/SectionDivider';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ValueSection } from '@/components/sections/ValueSection';
import { ClientSection } from '@/components/sections/ClientSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--base)]">
      <Navbar />
      
      <HeroSection />
      <SectionDivider animated />
      
      <IntroSection />
      <SectionDivider animated />
      
      <ServicesSection />
      <SectionDivider animated />
      
      <ValueSection />
      <SectionDivider animated />
      
      <ClientSection />
      <SectionDivider animated />
      
      <Footer />
    </main>
  );
}
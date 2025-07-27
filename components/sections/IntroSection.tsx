'use client';

import { motion } from 'framer-motion';
import { Building2, GraduationCap, Heart, Globe, Users, Zap } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { SectionOrbs } from '../ui/BackgroundOrbs';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollAnimations';

export const IntroSection = () => {
  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Global Presence",
      description: "Operating from Pakistan and UAE with worldwide impact"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Multidisciplinary professionals in AI, development, and social impact"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Cutting-edge AI solutions meeting real-world challenges"
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[var(--base)] overflow-hidden">
      <SectionOrbs count={3} />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal className="text-center mb-16 md:mb-24">
            <div className="inline-block neumorphic-flat px-6 py-3 rounded-full mb-6">
              <span className="text-sm md:text-base font-semibold text-[var(--accent)] uppercase tracking-wider">
                About SirkupAI
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text)] mb-6 text-balance">
              Digital Innovation Studio
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto text-balance">
              Transforming the future through responsible AI development and strategic innovation
            </p>
          </ScrollReveal>

          {/* Main Content Card */}
          <ScrollReveal delay={0.2} className="mb-16 md:mb-20">
            <NeumorphicCard 
              variant="deep" 
              className="p-8 md:p-12 lg:p-16 text-center pulse-neumorphic"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 neumorphic-raised rounded-3xl flex items-center justify-center">
                    <Globe className="w-10 h-10 md:w-12 md:h-12 text-[var(--accent)]" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text)] mb-8 text-balance">
                  Bridging AI Technology with Human Progress
                </h3>
                
                <div className="space-y-6 text-left">
                  <p className="text-lg md:text-xl text-[var(--text)] leading-relaxed">
                    <strong>SirkupAI</strong> is a comprehensive digital innovation studio specializing in AI-powered solutions 
                    across three strategic verticals: enterprise SaaS development, educational technology, and social impact initiatives.
                  </p>
                  
                  <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed">
                    As the flagship of <em>Sirkup-Digital</em>, a legal entity with offices in Pakistan and UAE, 
                    we harness the transformative potential of Artificial Intelligence for niche markets through 
                    innovative products and services that drive both business success and positive societal change.
                  </p>
                  
                  <div className="neumorphic-pressed p-6 md:p-8 rounded-2xl">
                    <p className="text-xl md:text-2xl font-semibold text-[var(--text)] text-center giant-debossed">
                      "Democratising AI for Sustainable Human Development and Progress"
                    </p>
                  </div>
                </div>
              </div>
            </NeumorphicCard>
          </ScrollReveal>

          {/* Features Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <NeumorphicCard 
                  variant="raised" 
                  className="p-6 md:p-8 text-center h-full group"
                  hover
                >
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 neumorphic-flat rounded-2xl flex items-center justify-center mx-auto mb-6"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <span className="text-[var(--accent)]">
                      {feature.icon}
                    </span>
                  </motion.div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-[var(--text)] mb-4">
                    {feature.title}
                  </h4>
                  
                  <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </NeumorphicCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Service Verticals Preview */}
          <ScrollReveal delay={0.4}>
            <NeumorphicCard variant="flat" className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8">
                Three Strategic Verticals
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 neumorphic-raised rounded-xl flex items-center justify-center mx-auto">
                    <GraduationCap className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text)]">AI Education</h4>
                  <p className="text-sm text-[var(--text-muted)]">Learning platforms & content ecosystems</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 neumorphic-raised rounded-xl flex items-center justify-center mx-auto">
                    <Building2 className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text)]">Enterprise Solutions</h4>
                  <p className="text-sm text-[var(--text-muted)]">SaaS tools for business automation</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 neumorphic-raised rounded-xl flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text)]">Social Impact</h4>
                  <p className="text-sm text-[var(--text-muted)]">AI for social justice & development</p>
                </div>
              </div>
            </NeumorphicCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
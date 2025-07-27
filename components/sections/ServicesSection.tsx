'use client';

import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Building2, 
  Heart, 
  BookOpen, 
  Users, 
  Zap,
  Target,
  Shield,
  Globe,
  Lightbulb,
  TrendingUp,
  Scale
} from 'lucide-react';
import { SlidingTabs, TabContentCard } from '../ui/SlidingTabs';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { SectionOrbs } from '../ui/BackgroundOrbs';
import { ScrollReveal } from '../animations/ScrollAnimations';

export const ServicesSection = () => {
  const educationContent = (
    <TabContentCard>
      <div className="space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 neumorphic-raised rounded-2xl flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-[var(--accent)]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
            AI Education & Learning Platforms
          </h3>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Democratising AI knowledge through comprehensive subscription-based educational platforms 
            and interactive content ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <NeumorphicCard variant="flat" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">SirkupAI Academy</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              Structured learning programs covering prompt engineering, business automation, 
              and AI monetization strategies through interactive courses and live workshops.
            </p>
          </NeumorphicCard>

          <NeumorphicCard variant="flat" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Community Learning</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              Community-driven learning experiences fostering collaboration and knowledge sharing 
              among AI enthusiasts and professionals.
            </p>
          </NeumorphicCard>

          <NeumorphicCard variant="flat" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Practical Skills</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              Hands-on training in real-world AI applications, from basic concepts to 
              advanced implementation strategies for various industries.
            </p>
          </NeumorphicCard>

          <NeumorphicCard variant="flat" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Career Growth</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              Professional development pathways designed to advance careers in AI, 
              with certification programs and industry-recognized credentials.
            </p>
          </NeumorphicCard>
        </div>
      </div>
    </TabContentCard>
  );

  const enterpriseContent = (
    <TabContentCard>
      <div className="space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 neumorphic-raised rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-8 h-8 text-[var(--accent)]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
            Enterprise AI Solutions
          </h3>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Specialized SaaS portfolio designed to solve complex business challenges through 
            innovative AI-powered tools and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <NeumorphicCard variant="pressed" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">RankingAI</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              Advanced SEO optimization platform designed for the evolving search landscape, 
              helping businesses maintain competitive visibility and growth.
            </p>
            <div className="neumorphic-flat p-3 rounded-lg">
              <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wide">
                Featured Product
              </span>
            </div>
          </NeumorphicCard>

          <NeumorphicCard variant="pressed" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">AgentForge</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              No-code platform enabling small-to-medium enterprises to deploy custom AI agents 
              for customer support, lead management, and operational automation.
            </p>
            <div className="neumorphic-flat p-3 rounded-lg">
              <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wide">
                No-Code Solution
              </span>
            </div>
          </NeumorphicCard>

          <NeumorphicCard variant="flat" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Custom Solutions</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              Tailored AI systems designed specifically for your business needs, 
              from workflow automation to predictive analytics and decision support.
            </p>
          </NeumorphicCard>

          <NeumorphicCard variant="flat" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Enterprise Support</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              Comprehensive support and maintenance services ensuring optimal performance 
              and continuous improvement of your AI implementations.
            </p>
          </NeumorphicCard>
        </div>
      </div>
    </TabContentCard>
  );

  const socialImpactContent = (
    <TabContentCard>
      <div className="space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 neumorphic-raised rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-[var(--accent)]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
            Social Impact Technologies
          </h3>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Partnering with institutions and organizations to develop AI systems that promote 
            social justice, sustainable development, and positive societal change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <NeumorphicCard variant="pressed" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Scale className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">AdalBot</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              AI-powered legal assistance platform for gender-based violence survivors, 
              featuring multilingual support and trauma-informed design integrated with real-world legal workflows.
            </p>
            <div className="neumorphic-flat p-3 rounded-lg">
              <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wide">
                Legal Aid Platform
              </span>
            </div>
          </NeumorphicCard>

          <NeumorphicCard variant="flat" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Climate Action</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              AI solutions designed to combat climate change through data analysis, 
              predictive modeling, and sustainable resource management systems.
            </p>
          </NeumorphicCard>

          <NeumorphicCard variant="flat" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Extremism Prevention</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              Advanced AI systems for countering violent extremism through early detection, 
              intervention strategies, and community-based prevention programs.
            </p>
          </NeumorphicCard>

          <NeumorphicCard variant="flat" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-[var(--accent)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Human Rights</h4>
            </div>
            <p className="text-[var(--text-muted)]">
              Technology solutions promoting religious freedoms, gender equality, 
              and protection against various forms of discrimination and violence.
            </p>
          </NeumorphicCard>
        </div>

        <NeumorphicCard variant="deep" className="p-6 md:p-8 text-center">
          <h4 className="text-xl font-bold text-[var(--text)] mb-4">
            Partnership Approach
          </h4>
          <p className="text-[var(--text-muted)]">
            We collaborate with government institutions, inter-governmental agencies, 
            and civil society organizations to ensure our AI solutions create meaningful, 
            lasting positive impact in communities worldwide.
          </p>
        </NeumorphicCard>
      </div>
    </TabContentCard>
  );

  const tabs = [
    {
      id: 'education',
      label: 'AI Education',
      icon: <GraduationCap className="w-4 h-4" />,
      content: educationContent,
    },
    {
      id: 'enterprise',
      label: 'Enterprise Solutions',
      icon: <Building2 className="w-4 h-4" />,
      content: enterpriseContent,
    },
    {
      id: 'social',
      label: 'Social Impact',
      icon: <Heart className="w-4 h-4" />,
      content: socialImpactContent,
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[var(--base)] overflow-hidden">
      <SectionOrbs count={4} />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollReveal className="text-center mb-16 md:mb-24">
            <div className="inline-block neumorphic-flat px-6 py-3 rounded-full mb-6">
              <span className="text-sm md:text-base font-semibold text-[var(--accent)] uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text)] mb-6 text-balance">
              Three Strategic Verticals
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto text-balance">
              Comprehensive AI solutions spanning education, enterprise automation, and social impact initiatives
            </p>
          </ScrollReveal>

          {/* Sliding Tabs */}
          <ScrollReveal delay={0.3}>
            <SlidingTabs tabs={tabs} defaultTab="education" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
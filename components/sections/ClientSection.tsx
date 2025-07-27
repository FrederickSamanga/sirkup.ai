'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  GraduationCap, 
  Users, 
  Globe, 
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { SectionOrbs } from '../ui/BackgroundOrbs';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollAnimations';

export const ClientSection = () => {
  const spectrum = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Individual Entrepreneurs",
      description: "AI education and practical skills for personal growth and business development",
      features: ["Prompt engineering courses", "AI monetization strategies", "Personal AI assistants"],
      color: "border-[var(--text-muted)]"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Small-Medium Enterprises",
      description: "Custom automation solutions and no-code AI tools for operational efficiency",
      features: ["AgentForge platform", "Customer support automation", "Lead management systems"],
      color: "border-[var(--text-muted)]"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Large Corporations",
      description: "Enterprise-grade AI solutions for complex business challenges and growth",
      features: ["RankingAI for SEO", "Custom enterprise solutions", "Scalable AI infrastructure"],
      color: "border-[var(--text-muted)]"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Impact Organizations",
      description: "Purpose-built AI systems for social justice and sustainable development",
      features: ["AdalBot legal assistance", "Climate action tools", "Human rights technology"],
      color: "border-[var(--text-muted)]"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "Sirkup-Digital established with offices in Pakistan and UAE"
    },
    {
      year: "2021",
      title: "SirkupAI Launch",
      description: "Flagship AI innovation studio officially launched"
    },
    {
      year: "2022",
      title: "Education Platform",
      description: "SirkupAI Academy debuts with comprehensive AI learning programs"
    },
    {
      year: "2023",
      title: "Enterprise Solutions",
      description: "RankingAI and AgentForge platforms launched for business automation"
    },
    {
      year: "2024",
      title: "Social Impact",
      description: "AdalBot and climate action initiatives expand global reach"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Scaling impact across multiple continents and sectors"
    }
  ];

  return (
    <section id="clients" className="relative py-24 md:py-32 bg-[var(--base)] overflow-hidden">
      <SectionOrbs count={3} />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollReveal className="text-center mb-16 md:mb-24">
            <div className="inline-block neumorphic-flat px-6 py-3 rounded-full mb-6">
              <span className="text-sm md:text-base font-semibold text-[var(--accent)] uppercase tracking-wider">
                Client Spectrum
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text)] mb-6 text-balance">
              Serving Everyone with Excellence
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto text-balance">
              From individual entrepreneurs to global enterprises and impact organizations, 
              we deliver tailored AI solutions that drive growth and positive change.
            </p>
          </ScrollReveal>

          {/* Client Spectrum Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-32">
            {spectrum.map((client, index) => (
              <StaggerItem key={index}>
                <NeumorphicCard 
                  variant="raised" 
                  className={`p-6 md:p-8 h-full group border-l-4 ${client.color}`}
                  hover
                >
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className="w-12 h-12 md:w-14 md:h-14 neumorphic-flat rounded-2xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <span className="text-[var(--accent)]">
                        {client.icon}
                      </span>
                    </motion.div>
                    
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[var(--text)] mb-2">
                        {client.title}
                      </h3>
                      <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
                        {client.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {client.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                        <span className="text-sm text-[var(--text-muted)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </NeumorphicCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Timeline Section */}
          <ScrollReveal delay={0.3} className="mb-20 md:mb-32">
            <NeumorphicCard variant="deep" className="p-8 md:p-12 lg:p-16">
              <div className="text-center mb-12 md:mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                  Our Journey
                </h3>
                <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
                  A timeline of innovation, growth, and impact in the AI industry
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full neumorphic-pressed rounded-full hidden md:block" />
                
                <div className="space-y-8 md:space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.1, duration: 0.6 }
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-1 text-center md:text-left">
                        <NeumorphicCard variant="flat" className="p-4 md:p-6">
                          <div className="text-xl md:text-2xl font-black text-[var(--accent)] mb-2">
                            {milestone.year}
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-[var(--text)] mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-sm md:text-base text-[var(--text-muted)]">
                            {milestone.description}
                          </p>
                        </NeumorphicCard>
                      </div>
                      
                      {/* Timeline Marker */}
                      <div className="w-4 h-4 md:w-6 md:h-6 neumorphic-raised rounded-full flex-shrink-0 hidden md:block" />
                      
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </NeumorphicCard>
          </ScrollReveal>

          {/* Success Metrics */}
          <ScrollReveal delay={0.4}>
            <NeumorphicCard variant="raised" className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8 md:mb-12">
                Trusted by Organizations Worldwide
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="space-y-3">
                  <div className="w-16 h-16 neumorphic-pressed rounded-2xl flex items-center justify-center mx-auto">
                    <Building2 className="w-8 h-8 text-[var(--accent)]" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-[var(--text)]">Enterprises</div>
                  <div className="text-sm text-[var(--text-muted)]">Fortune 500 companies</div>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 neumorphic-pressed rounded-2xl flex items-center justify-center mx-auto">
                    <GraduationCap className="w-8 h-8 text-[var(--accent)]" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-[var(--text)]">Universities</div>
                  <div className="text-sm text-[var(--text-muted)]">Academic institutions</div>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 neumorphic-pressed rounded-2xl flex items-center justify-center mx-auto">
                    <Globe className="w-8 h-8 text-[var(--accent)]" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-[var(--text)]">NGOs</div>
                  <div className="text-sm text-[var(--text-muted)]">Impact organizations</div>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 neumorphic-pressed rounded-2xl flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-[var(--accent)]" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-[var(--text)]">Startups</div>
                  <div className="text-sm text-[var(--text-muted)]">Growing businesses</div>
                </div>
              </div>
            </NeumorphicCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
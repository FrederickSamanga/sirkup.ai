'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Target, Zap, Users } from 'lucide-react';
import { NeumorphicCard, NeumorphicButton } from '../ui/NeumorphicCard';
import { BackgroundOrbs } from '../ui/BackgroundOrbs';
import { ScrollReveal, StaggerContainer, StaggerItem, ParallaxOrb } from '../animations/ScrollAnimations';

export const ValueSection = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Technical Excellence",
      description: "Cutting-edge AI solutions built with precision and industry-leading expertise",
      color: "text-[var(--text)]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Responsibility",
      description: "Every solution designed to create positive impact and sustainable development",
      color: "text-[var(--text)]"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Scalable Innovation",
      description: "From individual entrepreneurs to large enterprises, solutions that grow with you",
      color: "text-[var(--text)]"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Purpose-Driven",
      description: "Technology that serves humanity while driving business growth and success",
      color: "text-[var(--text)]"
    }
  ];

  const stats = [
    { number: "3", label: "Strategic Verticals", suffix: "" },
    { number: "50", label: "Enterprise Clients", suffix: "+" },
    { number: "2", label: "Countries", suffix: "" },
    { number: "10k", label: "Students Reached", suffix: "+" }
  ];

  return (
    <section id="impact" className="relative py-24 md:py-32 bg-[var(--base)] overflow-hidden">
      <BackgroundOrbs density="medium" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Giant Text Section */}
          <ScrollReveal className="text-center mb-20 md:mb-32">
            <motion.h2 
              className="text-giant giant-debossed font-black leading-none mb-8 text-balance"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75] }
              }}
              viewport={{ once: true }}
            >
              IMPACT
              <br />
              <span className="giant-debossed-accent">MEETS</span>
              <br />
              INNOVATION
            </motion.h2>
            
            <ScrollReveal delay={0.3}>
              <NeumorphicCard variant="raised" className="inline-block px-8 md:px-12 py-6 md:py-8 max-w-4xl">
                <p className="text-lg md:text-xl lg:text-2xl text-[var(--text)] leading-relaxed text-balance">
                  We combine <strong>technical excellence</strong> with <strong>social responsibility</strong>, 
                  delivering scalable AI solutions that drive both{' '}
                  <em className="text-[var(--accent)] font-semibold">business growth</em> and{' '}
                  <em className="text-[var(--accent)] font-semibold">positive societal impact</em>.
                </p>
              </NeumorphicCard>
            </ScrollReveal>
          </ScrollReveal>

          {/* Value Propositions Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-32">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <NeumorphicCard 
                  variant="deep" 
                  className="p-8 md:p-12 h-full group"
                  hover
                >
                  <ParallaxOrb speed={0.3} className="mb-6">
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 neumorphic-raised rounded-3xl flex items-center justify-center"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1],
                        transition: { duration: 0.6 }
                      }}
                    >
                      <span className={`${value.color}`}>
                        {value.icon}
                      </span>
                    </motion.div>
                  </ParallaxOrb>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
                    {value.description}
                  </p>
                </NeumorphicCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Stats Section */}
          <ScrollReveal delay={0.4} className="mb-20 md:mb-32">
            <NeumorphicCard variant="flat" className="p-8 md:p-12 lg:p-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                  Our Global Impact
                </h3>
                <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
                  Measuring success through meaningful metrics that reflect our commitment to excellence and social impact
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1, duration: 0.6 }
                    }}
                    viewport={{ once: true }}
                  >
                    <NeumorphicCard variant="pressed" className="p-4 md:p-6 mb-4">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-black giant-debossed mb-1">
                        {stat.number}{stat.suffix}
                      </div>
                    </NeumorphicCard>
                    <p className="text-sm md:text-base font-medium text-[var(--text-muted)]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </NeumorphicCard>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal delay={0.5}>
            <NeumorphicCard variant="deep" className="p-8 md:p-12 lg:p-16 text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6 text-balance">
                Ready to Transform Your Business with AI?
              </h3>
              
              <p className="text-lg md:text-xl text-[var(--text-muted)] mb-8 md:mb-12 max-w-3xl mx-auto text-balance">
                From individual entrepreneurs seeking AI education to enterprises requiring custom automation, 
                and organizations working towards social change – we serve everyone with excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <NeumorphicButton
                  variant="raised"
                  className="px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold text-[var(--text)] flex items-center gap-3 group"
                  hover
                >
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </NeumorphicButton>
                
                <NeumorphicButton
                  variant="pressed"
                  className="px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold text-[var(--text)]"
                  hover
                >
                  Schedule Consultation
                </NeumorphicButton>
              </div>
            </NeumorphicCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Brain, Target } from 'lucide-react';
import { BackgroundOrbs } from '../ui/BackgroundOrbs';
import { NeumorphicButton, NeumorphicCard } from '../ui/NeumorphicCard';
import { ScrollReveal } from '../animations/ScrollAnimations';

export const HeroSection = () => {
  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        delay: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.9,
        staggerChildren: 0.1,
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--base)]">
      <BackgroundOrbs density="high" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-32 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Headline */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 md:mb-12 px-4 sm:px-0"
          >
            <h1 className="text-giant giant-debossed font-black leading-none mb-4 text-balance text-center">
              DEMOCRATISING
              <br />
              <span className="giant-debossed-accent">AI</span>
            </h1>
            <div className="text-mega font-bold text-[var(--text)] opacity-80 text-balance text-center">
              <span className="giant-debossed">for Sustainable Human Development</span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="mb-12 md:mb-16 px-4 sm:px-0"
          >
            <NeumorphicCard 
              variant="raised" 
              className="inline-block px-4 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 max-w-4xl mx-auto"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text)] leading-relaxed text-balance text-center">
                <strong>SirkupAI</strong> bridges cutting-edge artificial intelligence with practical business applications, 
                while addressing critical development challenges through{' '}
                <em className="text-[var(--text)] font-semibold">purpose-built AI systems</em>.
              </p>
            </NeumorphicCard>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-16 md:mb-20 px-4 sm:px-0"
          >
            <NeumorphicButton
              variant="raised"
              className="px-4 py-2 text-sm font-bold text-[var(--text)] flex items-center gap-2 group w-full sm:w-auto justify-center"
              hover
            >
              <Sparkles className="w-5 h-5" />
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NeumorphicButton>
            
            <NeumorphicButton
              variant="raised"
              className="px-4 py-2 text-sm font-bold text-[var(--text)] flex items-center gap-2 w-full sm:w-auto justify-center"
              hover
            >
              <Brain className="w-5 h-5" />
              Join Academy
            </NeumorphicButton>
          </motion.div>

          {/* Stats/Features */}
          <motion.div
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0"
          >
            <motion.div variants={statItemVariants}>
              <NeumorphicCard 
                variant="flat" 
                className="p-4 sm:p-6 md:p-8 text-center group"
                hover
              >
                <motion.div
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  className="w-12 h-12 md:w-16 md:h-16 neumorphic-raised rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <Brain className="w-6 h-6 md:w-8 md:h-8 text-[var(--accent)]" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[var(--text)] mb-2">AI Education</h3>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)]">
                  Comprehensive learning platforms democratising AI knowledge
                </p>
              </NeumorphicCard>
            </motion.div>

            <motion.div variants={statItemVariants}>
              <NeumorphicCard 
                variant="flat" 
                className="p-4 sm:p-6 md:p-8 text-center group"
                hover
              >
                <motion.div
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 1 }}
                  className="w-12 h-12 md:w-16 md:h-16 neumorphic-raised rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-[var(--accent)]" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[var(--text)] mb-2">Enterprise SaaS</h3>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)]">
                  Custom AI solutions driving business growth and efficiency
                </p>
              </NeumorphicCard>
            </motion.div>

            <motion.div variants={statItemVariants}>
              <NeumorphicCard 
                variant="flat" 
                className="p-4 sm:p-6 md:p-8 text-center group"
                hover
              >
                <motion.div
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 2 }}
                  className="w-12 h-12 md:w-16 md:h-16 neumorphic-raised rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[var(--accent)]" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[var(--text)] mb-2">Social Impact</h3>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)]">
                  AI systems promoting social justice and sustainable development
                </p>
              </NeumorphicCard>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 neumorphic-pressed rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--text-muted)] rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};
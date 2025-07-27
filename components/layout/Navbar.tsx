'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NeumorphicButton } from '../ui/NeumorphicCard';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#impact', label: 'Impact' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants: Variants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 30 
      }
    }
  };

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      x: '100%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    }
  };

  const linkVariants: Variants = {
    initial: {},
    hover: {
      scale: 1.05,
      transition: { type: "spring" as const, stiffness: 400, damping: 30 }
    },
    tap: { scale: 0.95 }
  };

  const linkDepthVariants = {
    initial: {
      boxShadow: "4px 4px 8px var(--dark), -4px -4px 8px var(--light)"
    },
    hover: {
      boxShadow: "inset 4px 4px 8px var(--dark), inset -4px -4px 8px var(--light)"
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className={`neumorphic-deep px-6 md:px-8 py-4 md:py-5 transition-all duration-500 ${
          scrolled ? 'neumorphic-raised' : ''
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div>
                <span className="text-xl md:text-2xl font-black text-[var(--text)]">SirkupAI</span>
                <div className="text-xs text-[var(--text-muted)]">Digital Innovation Studio</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-[var(--text)] neumorphic-flat"
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  animate={linkDepthVariants}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <NeumorphicButton
                variant="raised"
                className="px-4 py-2 text-sm font-semibold text-[var(--text)]"
                hover
              >
                Get Started
              </NeumorphicButton>
            </div>

            {/* Mobile Menu Button */}
            <NeumorphicButton
              variant="raised"
              className="lg:hidden w-12 h-12 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              hover
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </NeumorphicButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[88px] neumorphic-deep mx-4 my-2 rounded-2xl overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-lg font-medium text-[var(--text)] neumorphic-flat text-center"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: navItems.length * 0.1 }
                }}
              >
                <NeumorphicButton
                  variant="raised"
                  className="w-full px-4 py-3 text-lg font-semibold text-[var(--text)]"
                  onClick={() => setIsOpen(false)}
                  hover
                >
                  Get Started
                </NeumorphicButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
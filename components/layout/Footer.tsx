'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  Globe,
  ArrowRight,
  Heart
} from 'lucide-react';
import { NeumorphicCard, NeumorphicButton, NeumorphicInput } from '../ui/NeumorphicCard';
import { ScrollReveal } from '../animations/ScrollAnimations';

export const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Globe className="w-5 h-5" />, href: "#", label: "Website" },
  ];

  const footerLinks = {
    Services: [
      { label: "AI Education", href: "#services" },
      { label: "Enterprise Solutions", href: "#services" },
      { label: "Social Impact", href: "#services" },
      { label: "Custom Development", href: "#services" },
    ],
    Products: [
      { label: "SirkupAI Academy", href: "#" },
      { label: "RankingAI", href: "#" },
      { label: "AgentForge", href: "#" },
      { label: "AdalBot", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Our Impact", href: "#impact" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    Resources: [
      { label: "Blog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Support", href: "#" },
    ],
  };

  const offices = [
    {
      country: "Pakistan",
      address: "Islamabad, Pakistan",
      icon: <MapPin className="w-4 h-4" />
    },
    {
      country: "UAE",
      address: "Dubai, United Arab Emirates", 
      icon: <MapPin className="w-4 h-4" />
    }
  ];

  return (
    <footer className="relative bg-[var(--base)] overflow-hidden">
      {/* Deep Inset Container */}
      <div 
        className="relative"
        style={{
          boxShadow: 'inset 12px 12px 24px var(--dark), inset -12px -12px 24px var(--light)',
          background: 'var(--base)',
        }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <ScrollReveal>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 neumorphic-raised rounded-xl flex items-center justify-center">
                      <span className="text-xl font-black text-[var(--accent)]">S</span>
                    </div>
                    <div>
                      <span className="text-xl font-black text-[var(--text)]">SirkupAI</span>
                      <div className="text-xs text-[var(--text-muted)]">Digital Innovation Studio</div>
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
                    Democratising AI for Sustainable Human Development and Progress through innovative 
                    education, enterprise solutions, and social impact technologies.
                  </p>
                </div>
              </ScrollReveal>

              {/* Office Locations */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-[var(--text)] uppercase tracking-wide">
                    Global Offices
                  </h4>
                  {offices.map((office, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                      <span className="text-[var(--accent)]">{office.icon}</span>
                      <div>
                        <div className="font-medium text-[var(--text)]">{office.country}</div>
                        <div>{office.address}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal delay={0.2}>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-[var(--text)] uppercase tracking-wide">
                    Connect With Us
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 neumorphic-raised rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: "inset 4px 4px 8px var(--dark), inset -4px -4px 8px var(--light)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <ScrollReveal key={category} delay={0.1 * (categoryIndex + 1)}>
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-[var(--text)] uppercase tracking-wide">
                      {category}
                    </h4>
                    <ul className="space-y-2">
                      {links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <motion.a
                            href={link.href}
                            className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 group"
                            whileHover={{ x: 3 }}
                          >
                            {link.label}
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={0.5}>
                <NeumorphicCard variant="flat" className="p-6 space-y-4">
                  <h4 className="text-lg font-bold text-[var(--text)]">
                    Stay Updated
                  </h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    Get the latest insights on AI innovation and industry trends.
                  </p>
                  
                  <div className="space-y-3">
                    <NeumorphicInput
                      type="email"
                      placeholder="Your email address"
                      className="text-sm"
                    />
                    <NeumorphicButton
                      variant="raised"
                      className="w-full px-4 py-3 text-sm font-semibold text-[var(--text)] flex items-center justify-center gap-2"
                      hover
                    >
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </NeumorphicButton>
                  </div>
                </NeumorphicCard>
              </ScrollReveal>
            </div>
          </div>

          {/* Copyright */}
          <ScrollReveal delay={0.6}>
            <div className="border-t border-[var(--dark)] pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-[var(--text-muted)] text-center md:text-left">
                  <p>© 2025 SirkupAI. All rights reserved.</p>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
                  <a href="#" className="hover:text-[var(--accent)] transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-[var(--accent)] transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-[var(--accent)] transition-colors">
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};
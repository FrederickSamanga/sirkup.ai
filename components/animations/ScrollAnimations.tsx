'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollRevealProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  const variants: Variants = {
    hidden: { 
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.8,
        delay,
        ease: "easeOut",
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}: StaggerContainerProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export const ParallaxOrb = ({ 
  children, 
  speed = 0.5,
  className = '' 
}: { 
  children: ReactNode; 
  speed?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ 
        y: -20 * speed,
        transition: { 
          duration: 0.8,
          ease: "easeOut"
        }
      }}
      viewport={{ once: false, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};
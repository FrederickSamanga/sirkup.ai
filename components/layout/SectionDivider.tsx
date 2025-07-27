'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionDividerProps {
  className?: string;
  animated?: boolean;
}

export const SectionDivider = ({ 
  className = '',
  animated = true 
}: SectionDividerProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const dividerVariants = {
    hidden: { 
      scaleX: 0,
      opacity: 0,
    },
    visible: { 
      scaleX: 1,
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  };

  if (!animated) {
    return (
      <div className={`section-divider md:section-divider section-divider-mobile ${className}`} />
    );
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        ref={ref}
        className="section-divider md:section-divider section-divider-mobile"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={dividerVariants}
      />
    </div>
  );
};

export const DeepDivider = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative h-20 md:h-32 overflow-hidden bg-[var(--base)] ${className}`}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-[5%] right-[5%] h-6 md:h-10 -translate-y-1/2 rounded-full">
          <div 
            className="w-full h-full rounded-full"
            style={{
              boxShadow: 'inset 8px 8px 16px var(--dark), inset -8px -8px 16px var(--light)',
              background: 'var(--base)',
            }}
          />
        </div>
        
        {/* Additional depth lines */}
        <div className="absolute top-1/2 left-[8%] right-[8%] h-2 md:h-4 -translate-y-1/2 rounded-full opacity-50">
          <div 
            className="w-full h-full rounded-full"
            style={{
              boxShadow: 'inset 4px 4px 8px var(--dark), inset -4px -4px 8px var(--light)',
              background: 'var(--base)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
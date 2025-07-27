'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ParallaxOrb } from '../animations/ScrollAnimations';

interface Orb {
  id: number;
  size: number;
  x: number;
  y: number;
  type: 'raised' | 'pressed' | 'flat';
  animationDelay: number;
  speed: number;
}

const generateOrbs = (count: number): Orb[] => {
  const orbs: Orb[] = [];
  const types: ('raised' | 'pressed' | 'flat')[] = ['raised', 'pressed', 'flat'];
  
  for (let i = 0; i < count; i++) {
    orbs.push({
      id: i,
      size: Math.random() * 60 + 30, // 30-90px
      x: Math.random() * 100,
      y: Math.random() * 100,
      type: Math.random() > 0.7 ? 'raised' : 'flat',
      animationDelay: Math.random() * 6,
      speed: Math.random() * 0.5 + 0.3,
    });
  }
  
  return orbs;
};

interface BackgroundOrbsProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

export const BackgroundOrbs = ({ 
  density = 'medium',
  className = '' 
}: BackgroundOrbsProps) => {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [mounted, setMounted] = useState(false);

  const orbCounts = { low: 2, medium: 3, high: 4 };
  const orbCount = orbCounts[density] || orbCounts.medium;

  useEffect(() => {
    setMounted(true);
    setOrbs(generateOrbs(orbCount));
  }, [orbCount]);

  // Don't render anything until mounted on client
  if (!mounted) {
    return <div className={`absolute inset-0 overflow-hidden ${className}`} />;
  }

  const getOrbStyle = (orb: Orb) => {
    const baseClasses = 'absolute rounded-full pointer-events-none';
    const sizeClasses = `w-[${orb.size}px] h-[${orb.size}px]`;
    
    switch (orb.type) {
      case 'raised':
        return `${baseClasses} ${sizeClasses} neumorphic-raised opacity-30`;
      case 'pressed':
        return `${baseClasses} ${sizeClasses} neumorphic-pressed opacity-20`;
      case 'flat':
        return `${baseClasses} ${sizeClasses} neumorphic-flat opacity-25`;
      default:
        return `${baseClasses} ${sizeClasses} neumorphic-flat opacity-25`;
    }
  };

  const floatVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0,
      }
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {orbs.map((orb) => (
        <ParallaxOrb key={orb.id} speed={orb.speed}>
          <motion.div
            className={getOrbStyle(orb)}
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
            }}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            transition={{
              ...floatVariants.animate.transition,
              delay: orb.animationDelay,
            }}
          />
        </ParallaxOrb>
      ))}
    </div>
  );
};

export const SectionOrbs = ({ 
  count = 3,
  className = '' 
}: { 
  count?: number;
  className?: string;
}) => {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setOrbs(generateOrbs(count));
  }, [count]);

  // Don't render anything until mounted on client
  if (!mounted) {
    return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`absolute rounded-full opacity-15 ${
            orb.type === 'raised' ? 'neumorphic-raised' : 
            orb.type === 'pressed' ? 'neumorphic-pressed' : 
            'neumorphic-flat'
          }`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            opacity: 0.3,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
          }}
        />
      ))}
    </div>
  );
};
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface NeumorphicCardProps {
  children: ReactNode;
  variant?: 'raised' | 'pressed' | 'flat' | 'deep';
  className?: string;
  hover?: boolean;
}

export const NeumorphicCard = ({ 
  children, 
  variant = 'raised', 
  className = '',
  hover = false 
}: NeumorphicCardProps) => {
  const baseClasses = 'bg-[var(--base)] rounded-2xl';
  
  const variantClasses = {
    raised: 'shadow-[4px_4px_8px_var(--dark),-2px_-2px_4px_var(--light)]',
    pressed: 'shadow-[inset_4px_4px_8px_var(--dark),inset_-2px_-2px_4px_var(--light)]',
    flat: 'shadow-[3px_3px_6px_var(--dark),-2px_-2px_4px_var(--light)]',
    deep: 'shadow-[8px_8px_16px_var(--dark),-4px_-4px_8px_var(--light)] rounded-3xl'
  };

  const hoverClasses = hover ? 'hover:shadow-[2px_2px_4px_var(--dark),-2px_-2px_4px_var(--light)] transition-shadow duration-300' : '';

  return (
    <div className={cn(baseClasses, variantClasses[variant], hoverClasses, className)}>
      {children}
    </div>
  );
};

export const NeumorphicInput = ({ 
  className = '', 
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        'w-full px-4 py-3 bg-[var(--base)] rounded-xl',
        'shadow-[inset_4px_4px_8px_var(--dark),inset_-2px_-2px_4px_var(--light)]',
        'border-none outline-none text-[var(--text)] placeholder-[var(--text-muted)]',
        'focus:shadow-[inset_6px_6px_12px_var(--dark),inset_-3px_-3px_6px_var(--light)]',
        'transition-shadow duration-300',
        className
      )}
      {...props}
    />
  );
};

export const NeumorphicButton = ({ 
  children, 
  variant = 'raised',
  className = '',
  onClick,
  disabled = false,
  hover = false,
  ...props 
}: NeumorphicCardProps & { onClick?: () => void; disabled?: boolean }) => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: hover ? 1.05 : 1,
      transition: { type: "spring", stiffness: 400, damping: 30 }
    },
    tap: { scale: 0.95 }
  };

  const baseClasses = 'bg-[var(--base)] rounded-xl cursor-pointer select-none transition-all duration-200';
  
  const variantStyles = {
    raised: {
      boxShadow: '4px 4px 8px var(--dark), -2px -2px 4px var(--light)'
    },
    pressed: {
      boxShadow: 'inset 4px 4px 8px var(--dark), inset -2px -2px 4px var(--light)'
    },
    flat: {
      boxShadow: '3px 3px 6px var(--dark), -2px -2px 4px var(--light)'
    },
    deep: {
      boxShadow: '8px 8px 16px var(--dark), -4px -4px 8px var(--light)'
    }
  };

  const hoverStyle = hover ? {
    boxShadow: 'inset 2px 2px 4px var(--dark), inset -1px -1px 2px var(--light)'
  } : {};

  return (
    <motion.button
      className={cn(baseClasses, className)}
      style={variantStyles[variant]}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};
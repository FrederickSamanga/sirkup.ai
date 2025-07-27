'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
  icon?: ReactNode;
}

interface SlidingTabsProps {
  tabs: Tab[];
  className?: string;
  defaultTab?: string;
}

export const SlidingTabs = ({ 
  tabs, 
  className = '',
  defaultTab 
}: SlidingTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  
  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const tabVariants = {
    inactive: {
      color: 'var(--text-muted)',
      transition: { duration: 0.3 }
    },
    active: {
      color: 'var(--text)',
      transition: { duration: 0.3 }
    }
  };

  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation */}
      <div className="relative neumorphic-flat p-2 mb-8 md:mb-12">
        <div className="relative flex">
          {/* Sliding Background */}
          <motion.div
            className="absolute top-2 bottom-2 neumorphic-raised"
            initial={false}
            animate={{
              x: `calc(${activeIndex * 100}% + ${activeIndex * 8}px)`,
              width: `calc(${100 / tabs.length}% - 8px)`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              left: '4px',
            }}
          />
          
          {/* Tab Buttons */}
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 px-4 py-3 md:py-4 text-sm md:text-base font-medium transition-all duration-300 rounded-lg mx-1 min-w-0 ${
                activeTab === tab.id
                  ? 'text-[var(--text)] neumorphic-pressed'
                  : 'text-[var(--text-muted)] neumorphic-flat hover:text-[var(--text)]'
              }`}
              onClick={() => setActiveTab(tab.id)}
              variants={tabVariants}
              animate={activeTab === tab.id ? 'active' : 'inactive'}
              whileHover={{ scale: activeTab === tab.id ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={activeTab === tab.id ? {
                boxShadow: 'inset 4px 4px 8px var(--dark), inset -2px -2px 4px var(--light)'
              } : {}}
            >
              {tab.icon && (
                <span className="w-4 h-4 md:w-5 md:h-5">
                  {tab.icon}
                </span>
              )}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[400px] md:min-h-[500px]">
        <AnimatePresence mode="wait">
          {activeTabData && (
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0"
            >
              {activeTabData.content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const TabContentCard = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`neumorphic-raised p-6 md:p-8 lg:p-12 h-full ${className}`}>
      {children}
    </div>
  );
};
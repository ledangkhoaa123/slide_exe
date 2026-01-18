import React from 'react';
import { motion } from 'framer-motion';

interface WireframeCakeProps {
  className?: string;
  color?: string; // Hex or tailwind class text-color
}

export const WireframeCake: React.FC<WireframeCakeProps> = ({ className = '', color = '#f59e0b' }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full drop-shadow-2xl"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-current opacity-30" />
          </pattern>
          <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Bottom Tier */}
        <motion.g
          initial={{ y: 20 }}
          animate={{ y: [20, 10, 20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
             {/* Back of cylinder */}
            <path d="M 50 250 A 150 40 0 0 0 350 250 V 300 A 150 40 0 0 1 50 300 Z" fill="url(#grid)" stroke="currentColor" strokeWidth="1" className="text-amber-500/20" />
            
            {/* Front Body */}
            <path d="M 50 250 A 150 40 0 0 1 350 250 V 300 A 150 40 0 0 1 50 300 Z" fill="url(#grid)" stroke="currentColor" strokeWidth="2" className="text-amber-500" />
            <path d="M 50 250 A 150 40 0 0 1 350 250 V 300 A 150 40 0 0 1 50 300 Z" fill="url(#shine)" />
            
            {/* Top Surface */}
            <ellipse cx="200" cy="250" rx="150" ry="40" fill="url(#grid)" stroke="currentColor" strokeWidth="2" className="text-amber-400/50" />
        </motion.g>

        {/* Middle Tier */}
        <motion.g
           initial={{ y: 10 }}
           animate={{ y: [10, 0, 10] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
            <path d="M 100 180 A 100 30 0 0 1 300 180 V 230 A 100 30 0 0 1 100 230 Z" fill="url(#grid)" stroke="currentColor" strokeWidth="2" className="text-rose-400" />
            <path d="M 100 180 A 100 30 0 0 1 300 180 V 230 A 100 30 0 0 1 100 230 Z" fill="url(#shine)" />
            <ellipse cx="200" cy="180" rx="100" ry="30" fill="url(#grid)" stroke="currentColor" strokeWidth="2" className="text-rose-300/50" />
        </motion.g>

        {/* Top Tier */}
        <motion.g
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
            <path d="M 150 120 A 50 15 0 0 1 250 120 V 160 A 50 15 0 0 1 150 160 Z" fill="url(#grid)" stroke="currentColor" strokeWidth="2" className="text-indigo-500" />
            <path d="M 150 120 A 50 15 0 0 1 250 120 V 160 A 50 15 0 0 1 150 160 Z" fill="url(#shine)" />
            <ellipse cx="200" cy="120" rx="50" ry="15" fill="url(#grid)" stroke="currentColor" strokeWidth="2" className="text-indigo-400/50" />
            
            {/* Cherry/Topping */}
            <circle cx="200" cy="100" r="15" fill="#f43f5e" className="shadow-lg" />
        </motion.g>

      </motion.svg>
    </div>
  );
};

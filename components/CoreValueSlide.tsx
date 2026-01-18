import React from 'react';
import { motion } from 'framer-motion';
import { CoreValueProps } from '../types';
import { SlideContainer } from './SlideContainer';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { WireframeCake } from './WireframeCake';

export const CoreValueSlide: React.FC<CoreValueProps> = ({ 
  id, 
  label, 
  headline, 
  subHeadline, 
  challenge, 
  solution, 
  keyPhrase, 
  Icon 
}) => {
  
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const visualVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } }
  };

  return (
    <SlideContainer className="bg-[#FFFDF5] overflow-hidden">
        {/* Background Subtle Grid */}
       <div className="absolute inset-0 pointer-events-none opacity-10">
           <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
       </div>

      <div className="flex flex-col lg:flex-row items-center h-full w-full max-w-7xl mx-auto">
        
        {/* Text Content - Left */}
        <div className="w-full lg:w-1/2 p-4 lg:p-12 flex flex-col justify-center relative z-10">
          <motion.div variants={textVariants} className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 font-bold text-xs rounded-full tracking-widest uppercase border border-amber-200">
              {label}
            </span>
            <div className="h-px bg-amber-200 flex-grow max-w-[100px]" />
          </motion.div>

          <motion.h2 variants={textVariants} className="text-4xl md:text-5xl font-extrabold text-[#451a03] mb-2 leading-tight">
            {headline}
          </motion.h2>

          <motion.h3 variants={textVariants} className="text-xl text-[#92400e] font-light mb-10">
            {subHeadline}
          </motion.h3>

          <div className="space-y-6">
            <motion.div variants={textVariants} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-l-4 border-slate-300 shadow-sm">
               <div className="flex items-start gap-3">
                 <AlertCircle className="text-slate-400 mt-1 flex-shrink-0" size={20} />
                 <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">The Hard Thing</h4>
                    <p className="text-[#451a03]/80 leading-relaxed">{challenge}</p>
                 </div>
               </div>
            </motion.div>

            <motion.div variants={textVariants} className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 shadow-sm">
               <div className="flex items-start gap-3">
                 <CheckCircle2 className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                 <div>
                    <h4 className="text-sm font-bold text-amber-500 uppercase tracking-wide mb-1">Our Solution</h4>
                    <p className="text-[#451a03] leading-relaxed font-medium">{solution}</p>
                 </div>
               </div>
            </motion.div>
          </div>

          <motion.div variants={textVariants} className="mt-10 flex items-center gap-4 text-amber-800">
             <div className="w-12 h-1 bg-amber-500" />
             <p className="text-lg md:text-xl font-bold italic font-serif">"{keyPhrase}"</p>
          </motion.div>
        </div>

        {/* Visual Content - Right */}
        <div className="hidden lg:flex w-full lg:w-1/2 h-full items-center justify-center relative p-12">
            {/* Background Shape */}
            <motion.div 
                className="absolute inset-0 bg-[#FEF3C7] rounded-l-[5rem] opacity-50" // Amber-100
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.8 }}
            />
            
            <motion.div variants={visualVariants} className="relative z-10">
                <div className="relative w-96 h-96">
                    {/* Render specific visuals based on ID */}
                    {id === 1 ? (
                        <div className="transform scale-110">
                            {/* For Core Value 1: Digital Integrity -> Show the Wireframe Cake */}
                            <WireframeCake />
                            <motion.div 
                                className="absolute bottom-4 right-0 bg-white px-4 py-2 rounded-lg shadow-xl text-amber-600 text-xs font-bold uppercase tracking-wider border border-amber-100"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                100% Precision
                            </motion.div>
                        </div>
                    ) : (
                        <>
                            {/* Generic Visual for 2 & 3 */}
                            <div className="absolute inset-0 bg-amber-500 rounded-full opacity-5 blur-2xl animate-pulse" />
                            <div className="absolute inset-4 border border-dashed border-amber-300 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-12 border-2 border-amber-200 rounded-full" />
                            
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Icon size={100} className="text-amber-500" strokeWidth={1} />
                            </div>

                            {/* Floating decorative spheres for "Lively" feel */}
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute rounded-full opacity-60 ${i % 2 === 0 ? 'bg-rose-300' : 'bg-indigo-300'}`}
                                    style={{ 
                                        width: Math.random() * 40 + 10, 
                                        height: Math.random() * 40 + 10,
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`
                                    }}
                                    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                            ))}
                        </>
                    )}

                    {/* Badge */}
                     <motion.div 
                        className="absolute bottom-10 left-0 bg-amber-600 text-white p-3 rounded-lg shadow-xl"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                       <span className="font-bold text-lg">#{id}</span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
};

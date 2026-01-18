import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { SlideContainer } from './SlideContainer';
import { WireframeCake } from './WireframeCake';

export const ClosingSlide: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <SlideContainer className="bg-[#291409] text-white overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-900/40 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-900/30 rounded-full blur-[100px]" />
           {/* Subtle Cake spinning in background */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 scale-[2] pointer-events-none">
                <WireframeCake />
           </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full text-center max-w-4xl mx-auto px-4 relative z-10">
        
        <motion.div variants={itemVariants} className="mb-8">
             <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(217,119,6,0.5)]">
                 <Mail size={40} className="text-white" />
             </div>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Ready to invest in the <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-rose-200">
            future of celebration?
          </span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-amber-100/70 mb-12 font-light">
          LAYERZ - Where <span className="font-semibold text-white">Tech</span> Meets <span className="font-semibold text-white">Taste</span>.
        </motion.p>

        <motion.div variants={itemVariants}>
            <button className="group relative px-8 py-4 bg-white text-[#451a03] font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
                <span className="relative z-10 flex items-center gap-2">
                    Liên Hệ Hợp Tác <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-amber-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
        </motion.div>

        <motion.div 
            className="absolute bottom-8 left-0 w-full text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ delay: 1 }}
        >
            <p className="text-sm text-amber-100/40">© 2024 LAYERZ Inc. All rights reserved.</p>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

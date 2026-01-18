import React from 'react';
import { motion } from 'framer-motion';
import { WireframeCake } from './WireframeCake';
import { SlideContainer } from './SlideContainer';
import { ArrowDown } from 'lucide-react';

export const HeroSlide: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <SlideContainer className="bg-[#FFFDF5] text-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-amber-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between h-full w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div variants={itemVariants} className="mb-4">
                <span className="px-4 py-2 bg-white/50 backdrop-blur-md border border-amber-200 rounded-full text-amber-600 font-bold text-xs tracking-[0.2em] uppercase shadow-sm">
                    The Future of Pastry
                </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-7xl md:text-9xl font-extrabold tracking-tighter text-[#451a03] mb-2 drop-shadow-sm"
            >
              LAYERZ
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl md:text-4xl font-serif italic text-amber-500 mb-8"
            >
              Unfold Your Story, <br/>
              <span className="text-indigo-500 not-italic font-sans font-light">Layer by Layer.</span>
            </motion.p>
            
            <motion.div 
                variants={itemVariants}
                className="h-1 w-24 bg-[#451a03] mb-8 rounded-full"
            />

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-[#78350f] max-w-lg font-light leading-relaxed"
            >
              "Nền tảng kết nối sáng tạo số và nghệ nhân bánh thủ công."
            </motion.p>
        </div>

        {/* Right Visual - Wireframe Cake */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center relative">
             <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full h-full max-w-[500px] max-h-[500px]"
             >
                 <WireframeCake />
                 
                 {/* Floating Labels */}
                 <motion.div 
                    className="absolute top-1/4 right-10 bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-white"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                 >
                     <span className="text-xs font-bold text-indigo-600">3D Precision</span>
                 </motion.div>

                 <motion.div 
                    className="absolute bottom-1/3 left-0 bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-white"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                 >
                     <span className="text-xs font-bold text-rose-500">Artisan Taste</span>
                 </motion.div>
             </motion.div>
        </div>

      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-900/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </SlideContainer>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { AlignLeft, Zap, Heart } from 'lucide-react';
import { SlideContainer } from './SlideContainer';

export const ProfileSlide: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: 50, rotateY: 10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 20
      } 
    }
  };

  const floatingVariant = {
    animate: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  return (
    <SlideContainer className="relative overflow-hidden bg-[#FFFDF5]">
      {/* Background Grid / Mesh Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-gold" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d97706" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-gold)" />
        </svg>
        {/* Soft Gradients / Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-200 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-200 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-full items-center w-full max-w-7xl mx-auto">
        {/* Left Header Section */}
        <div className="lg:col-span-5 flex flex-col justify-center pl-4 lg:pl-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 font-bold tracking-widest mb-4 text-xs uppercase shadow-sm border border-amber-200">
              Identity
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#451a03] mb-6 leading-tight">
              HỒ SƠ <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-indigo-500">
                STARTUP
              </span>
            </h2>
            <h3 className="text-xl md:text-2xl text-[#78350f] font-medium leading-relaxed">
              Ý Nghĩa Tên Gọi: <br/>
              <span className="text-3xl font-bold text-indigo-900">LAYERZ</span>
            </h3>
            <p className="mt-6 text-[#78350f]/80 max-w-md">
                Unfolding the delicate balance between digital precision and artisan soul.
            </p>
          </motion.div>
        </div>

        {/* Right Content Cards - Floating Glassmorphism */}
        <div className="lg:col-span-7 flex flex-col gap-5 relative pr-4 lg:pr-0">
            
          {/* Card 1: Structure (Tech/Violet) */}
          <motion.div 
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="group relative"
          >
             <motion.div variants={floatingVariant} animate="animate" custom={1} className="relative z-10 bg-white/70 backdrop-blur-xl p-6 lg:p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(251,191,36,0.1)] hover:shadow-[0_8px_30px_rgb(99,102,241,0.2)] transition-all duration-300">
                <div className="flex items-start gap-6">
                    <div className="bg-indigo-100/80 p-4 rounded-2xl text-indigo-600 shadow-inner flex-shrink-0">
                        <AlignLeft size={32} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-2 text-[#451a03]">Layers <span className="text-sm font-normal text-amber-600/70 ml-2">(Những lớp bánh)</span></h4>
                        <p className="text-[#78350f] font-medium">
                        Tượng trưng cho cấu trúc đa tầng: <br/>
                        <span className="text-indigo-600 font-semibold">Công nghệ - Nghệ nhân - Cảm xúc.</span>
                        </p>
                    </div>
                </div>
             </motion.div>
          </motion.div>

          {/* Card 2: Spirit (Rose/Sweet) */}
          <motion.div 
             custom={1}
             variants={cardVariants}
             initial="hidden"
             whileInView="visible"
             className="group relative ml-0 lg:ml-12" // Indent for visual interest
          >
             <motion.div variants={floatingVariant} animate="animate" custom={2} className="relative z-10 bg-white/70 backdrop-blur-xl p-6 lg:p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(251,191,36,0.1)] hover:shadow-[0_8px_30px_rgb(244,63,94,0.2)] transition-all duration-300">
                <div className="flex items-start gap-6">
                    <div className="bg-rose-100/80 p-4 rounded-2xl text-rose-600 shadow-inner flex-shrink-0">
                        <Zap size={32} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-2 text-[#451a03]">Spirit "Z" <span className="text-sm font-normal text-amber-600/70 ml-2">(thay cho S)</span></h4>
                         <p className="text-[#78350f] font-medium">
                            Tuyên ngôn của Gen Z:<br/>
                            <span className="text-rose-500 font-semibold">Phá cách, Độc bản (Signature).</span>
                        </p>
                    </div>
                </div>
             </motion.div>
          </motion.div>

          {/* Card 3: Message (Gold/Warmth) */}
          <motion.div 
             custom={2}
             variants={cardVariants}
             initial="hidden"
             whileInView="visible"
             className="group relative"
          >
             <motion.div variants={floatingVariant} animate="animate" custom={3} className="relative z-10 bg-white/70 backdrop-blur-xl p-6 lg:p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(251,191,36,0.1)] hover:shadow-[0_8px_30px_rgb(217,119,6,0.2)] transition-all duration-300">
                <div className="flex items-start gap-6">
                    <div className="bg-amber-100/80 p-4 rounded-2xl text-amber-600 shadow-inner flex-shrink-0">
                        <Heart size={32} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-2 text-[#451a03]">Message <span className="text-sm font-normal text-amber-600/70 ml-2">(Cảm xúc)</span></h4>
                         <p className="text-[#78350f] font-medium">
                            Mỗi lớp bánh là một lớp cảm xúc. Nền tảng để bạn <span className="italic text-amber-600">"mã hóa"</span> câu chuyện riêng.
                        </p>
                    </div>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </SlideContainer>
  );
};

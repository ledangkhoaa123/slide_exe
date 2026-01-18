import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  return (
    <section 
      ref={ref}
      className={`h-screen w-full snap-start snap-always relative overflow-hidden flex flex-col justify-center items-center p-6 md:p-12 ${className}`}
    >
      {/* Pass isInView status to children if they are functions, otherwise render children wrapped in motion context if needed */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          hidden: { opacity: 0 }
        }}
        className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
};

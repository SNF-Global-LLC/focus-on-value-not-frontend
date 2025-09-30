import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-success origin-left z-50 shadow-glow"
      style={{ 
        scaleX,
        boxShadow: '0 0 20px hsl(0 84.2% 60.2% / 0.3)'
      }}
    />
  );
};

export default ScrollProgress;

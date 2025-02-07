import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Confetti = () => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
  const pieces = Array.from({ length: 50 });

  return (
    <div className="fixed inset-0 pointer-events-none">
      {pieces.map((_, i) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const x = Math.random() * 100;
        const delay = Math.random() * 0.5;
        
        return (
          <motion.div
            key={i}
            initial={{
              x: `${x}vw`,
              y: -20,
              scale: Math.random() * 0.5 + 0.5,
              rotate: Math.random() * 360
            }}
            animate={{
              y: '100vh',
              rotate: Math.random() * 720
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              delay,
              ease: "linear",
              repeat: Infinity
            }}
            style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              backgroundColor: color,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%'
            }}
          />
        );
      })}
    </div>
  );
};

export default Confetti
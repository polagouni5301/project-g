import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import useSound from 'use-sound';

const PRIZES = [
  'Cheers & Earned Leave',
  'Coffee with Tuhin & WFH Perks',
  'WFH Perks & GD T-Shirt',
  'GD T-Shirt & Water Bottle'
];

interface SpinWheelProps {
  isSpinning: boolean;
  finalRotation: number;
  onSpinComplete: () => void;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ isSpinning, finalRotation, onSpinComplete }) => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [playSpinSound] = useSound('/spin.mp3', { volume: 0.5 });
  const [playWinSound] = useSound('/win.mp3', { volume: 0.5 });

  useEffect(() => {
    if (isSpinning && wheelRef.current) {
      playSpinSound();
      
      gsap.to(wheelRef.current, {
        rotation: finalRotation,
        duration: 4,
        ease: "power2.inOut",
        onComplete: () => {
          playWinSound();
          onSpinComplete();
        }
      });
    }
  }, [isSpinning, finalRotation, onSpinComplete, playSpinSound, playWinSound]);

  return (
    <div className="relative w-[400px] h-[400px]">
      {/* Glowing effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse" />
      
      {/* Pointer */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 clip-arrow shadow-lg" 
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      </div>

      {/* Wheel */}
      <motion.div
        className="w-full h-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <div
          ref={wheelRef}
          className="relative w-full h-full rounded-full border-8 border-white shadow-[0_0_20px_rgba(0,0,0,0.2)] transform transition-transform"
          style={{
            background: 'conic-gradient(from 0deg, #FF6B6B 0deg 90deg, #4ECDC4 90deg 180deg, #45B7D1 180deg 270deg, #96CEB4 270deg)'
          }}
        >
          {/* Prize sections */}
          {PRIZES.map((prize, index) => (
            <div
              key={index}
              className="absolute w-full h-full flex items-center justify-center"
              style={{
                transform: `rotate(${index * 90 + 45}deg)`,
              }}
            >
              <div
                className="text-white font-bold text-sm w-40 text-center transform -rotate-[45deg] drop-shadow-lg"
                style={{ transformOrigin: "center" }}
              >
                {prize}
              </div>
            </div>
          ))}

          {/* Dividing lines */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-full bg-white/50 left-1/2 origin-bottom shadow-sm"
              style={{ transform: `rotate(${i * 90}deg)` }}
            />
          ))}

          {/* Center piece */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
              <div className="text-center">
                <p className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Wheel of
                </p>
                <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Fortune
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SpinWheel;
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AimingDemo() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [clayPos, setClayPos] = useState({ x: 20, y: 60 });
  const [showHit, setShowHit] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClayPos({
        x: 20 + Math.random() * 60,
        y: 30 + Math.random() * 40
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const handleClick = () => {
    const distance = Math.sqrt(
      Math.pow(mousePos.x - clayPos.x, 2) + Math.pow(mousePos.y - clayPos.y, 2)
    );
    
    if (distance < 12) {
      setShowHit(true);
      setScore(s => s + 1);
      setTimeout(() => setShowHit(false), 500);
      setClayPos({
        x: 20 + Math.random() * 60,
        y: 30 + Math.random() * 40
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 md:h-80 bg-gradient-to-b from-[#87CEEB] to-[#B0D4E8] rounded-2xl overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#3F4A3C] to-[#5A6B55]" />
      
      {/* Trees silhouette */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-around">
        {[1, 2, 3, 4, 5].map(i => (
          <div 
            key={i} 
            className="w-8 h-12 bg-[#2B2B2B]/30 rounded-t-full"
            style={{ height: `${30 + Math.random() * 30}px` }}
          />
        ))}
      </div>

      {/* Clay target */}
      <motion.div
        className="absolute"
        animate={{ 
          left: `${clayPos.x}%`, 
          top: `${clayPos.y}%`,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 -ml-5 -mt-5"
        >
          <svg viewBox="0 0 50 50">
            <ellipse cx="25" cy="25" rx="24" ry="10" fill="#F56600" stroke="#2B2B2B" strokeWidth="1" />
            <ellipse cx="25" cy="22" rx="18" ry="6" fill="#FF7B2E" opacity="0.6" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Hit effect */}
      <AnimatePresence>
        {showHit && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            className="absolute w-20 h-20 -ml-10 -mt-10 rounded-full bg-[#F56600]"
            style={{ left: `${clayPos.x}%`, top: `${clayPos.y}%` }}
          />
        )}
      </AnimatePresence>

      {/* Crosshair */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{ left: `${mousePos.x}%`, top: `${mousePos.y}%` }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="-ml-6 -mt-6">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#2B2B2B" strokeWidth="2" opacity="0.8" />
          <circle cx="25" cy="25" r="8" fill="none" stroke="#2B2B2B" strokeWidth="2" opacity="0.8" />
          <circle cx="25" cy="25" r="2" fill="#F56600" />
          <line x1="25" y1="2" x2="25" y2="15" stroke="#2B2B2B" strokeWidth="2" />
          <line x1="25" y1="35" x2="25" y2="48" stroke="#2B2B2B" strokeWidth="2" />
          <line x1="2" y1="25" x2="15" y2="25" stroke="#2B2B2B" strokeWidth="2" />
          <line x1="35" y1="25" x2="48" y2="25" stroke="#2B2B2B" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Score */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
        <span className="text-sm font-semibold text-[#3F4A3C]">Hits: {score}</span>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
        <span className="text-xs text-[#2B2B2B]/70">Click on the clay target!</span>
      </div>
    </div>
  );
}
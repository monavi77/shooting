import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CrosshairCursor({ size = 60, color = "#F56600" }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - size / 2,
        y: mousePosition.y - size / 2,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <svg width={size} height={size} viewBox="0 0 60 60">
        {/* Outer circle */}
        <circle
          cx="30"
          cy="30"
          r="28"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* Inner circle */}
        <circle
          cx="30"
          cy="30"
          r="12"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.8"
        />
        {/* Center dot */}
        <circle cx="30" cy="30" r="2" fill={color} />
        {/* Crosshair lines */}
        <line x1="30" y1="2" x2="30" y2="16" stroke={color} strokeWidth="1.5" opacity="0.8" />
        <line x1="30" y1="44" x2="30" y2="58" stroke={color} strokeWidth="1.5" opacity="0.8" />
        <line x1="2" y1="30" x2="16" y2="30" stroke={color} strokeWidth="1.5" opacity="0.8" />
        <line x1="44" y1="30" x2="58" y2="30" stroke={color} strokeWidth="1.5" opacity="0.8" />
      </svg>
    </motion.div>
  );
}
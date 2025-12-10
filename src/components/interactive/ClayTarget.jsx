import { motion } from 'framer-motion';

export default function ClayTarget({ 
  size = 50, 
  x = 0, 
  y = 0, 
  animate = false,
  delay = 0,
  className = ""
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={animate ? { x: -100, y: 100, opacity: 0, rotate: 0 } : { x, y }}
      animate={animate ? { 
        x: [x - 100, x, x + 200], 
        y: [y + 100, y, y - 50],
        opacity: [0, 1, 0],
        rotate: [0, 180, 360]
      } : { x, y }}
      transition={animate ? {
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeOut"
      } : {
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <svg width={size} height={size} viewBox="0 0 50 50">
        {/* Clay target disc */}
        <ellipse
          cx="25"
          cy="25"
          rx="24"
          ry="10"
          fill="#F56600"
          stroke="#2B2B2B"
          strokeWidth="1"
        />
        {/* Top highlight */}
        <ellipse
          cx="25"
          cy="22"
          rx="18"
          ry="6"
          fill="#FF7B2E"
          opacity="0.6"
        />
        {/* Center ring */}
        <ellipse
          cx="25"
          cy="25"
          rx="8"
          ry="3"
          fill="none"
          stroke="#2B2B2B"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  );
}
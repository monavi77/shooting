import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedSection({ 
  children, 
  className = "",
  direction = "up", // up, down, left, right, fade
  delay = 0,
  duration = 0.6
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    fade: { y: 0, x: 0 }
  };

  const initial = directions[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initial }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...initial }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}
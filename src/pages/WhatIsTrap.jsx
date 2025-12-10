import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Target, Crosshair, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import AnimatedSection from '../components/interactive/AnimatedSection';
import IconCard from '../components/interactive/IconCard';

export default function WhatIsTrap() {
  const diagramRef = useRef(null);
  const [clayPosition, setClayPosition] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: diagramRef,
    offset: ["start end", "end start"]
  });
  
  const clayX = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const unsubscribe = clayX.on("change", (latest) => {
      setClayPosition(latest);
    });
    return () => unsubscribe();
  }, [clayX]);

  const elements = [
    {
      icon: Target,
      title: "The Traphouse",
      description: "A low building that houses the target-throwing machine. Clay targets are launched at varying angles."
    },
    {
      icon: Crosshair,
      title: "Clay Targets",
      description: "Also called 'clay pigeons' - orange discs made of pitch and limestone that shatter when hit."
    },
    {
      icon: User,
      title: "Shooter Stations",
      description: "Five positions arranged in a semi-circle, each offering a different angle to the flight path."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-[#F56600] text-sm font-semibold uppercase tracking-wider">The Basics</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mt-3 mb-6">
              What Is Trap Shooting?
            </h1>
            <p className="text-lg text-[#2B2B2B]/70 leading-relaxed">
              Trap shooting is one of the oldest clay target sports, dating back to the 18th century. 
              It's a test of accuracy, timing, and focus where shooters attempt to break clay targets 
              launched into the air at high speed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Diagram */}
      <section ref={diagramRef} className="py-16 px-6 bg-[#EAE6C3]/30">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B2B2B]">
              How It Works
            </h2>
            <p className="text-[#2B2B2B]/60 mt-2">
              Scroll to see the clay target flight path
            </p>
          </AnimatedSection>

          {/* Diagram Container */}
          <div className="relative h-64 md:h-80 bg-gradient-to-b from-[#87CEEB] to-[#B0D4E8] rounded-2xl overflow-hidden">
            {/* Ground */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#3F4A3C] to-[#5A6B55]" />
            
            {/* Traphouse */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-16 left-8 md:left-16"
            >
              <div className="w-16 h-10 bg-[#8B7355] rounded-t-lg relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2B2B2B] rounded" />
              </div>
              <span className="text-xs text-white/80 mt-1 block text-center">Traphouse</span>
            </motion.div>

            {/* Flight Path Arc */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d="M 80 180 Q 300 40 520 120"
                stroke="#F56600"
                strokeWidth="2"
                strokeDasharray="8 4"
                fill="none"
                opacity="0.5"
              />
            </svg>

            {/* Animated Clay Target */}
            <motion.div
              className="absolute w-12 h-12"
              style={{
                left: `${10 + clayPosition * 0.7}%`,
                top: `${60 - Math.sin((clayPosition / 100) * Math.PI) * 40}%`,
              }}
            >
              <motion.div
                animate={{ rotate: clayPosition * 3.6 }}
                className="w-full h-full"
              >
                <svg viewBox="0 0 50 50" className="w-full h-full drop-shadow-lg">
                  <ellipse cx="25" cy="25" rx="24" ry="10" fill="#F56600" stroke="#2B2B2B" strokeWidth="1" />
                  <ellipse cx="25" cy="22" rx="18" ry="6" fill="#FF7B2E" opacity="0.6" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Shooter Stations */}
            <div className="absolute bottom-16 right-8 md:right-16 flex gap-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: num * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center text-xs font-bold text-[#3F4A3C]">
                    {num}
                  </div>
                  <span className="text-[10px] text-white/70 mt-0.5">Pos {num}</span>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center gap-2 text-xs text-[#2B2B2B]/70">
                <div className="w-3 h-3 rounded-full bg-[#F56600]" />
                <span>Clay Target</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Elements */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B2B2B]">
              Key Elements
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {elements.map((element, index) => (
              <IconCard
                key={element.title}
                icon={element.icon}
                title={element.title}
                description={element.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 px-6 bg-[#3F4A3C]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Basic Rules
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              "Shooters call 'Pull!' to release the target",
              "Each round consists of 25 targets",
              "Shooters rotate through all 5 positions",
              "Targets are thrown at varying angles up to 22 degrees",
              "A hit is scored when any visible piece breaks off"
            ].map((rule, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="left">
                <motion.div 
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.15)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-8 h-8 rounded-full bg-[#F56600] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-white/90">{rule}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B2B2B] mb-4">
              Ready to Learn the Technique?
            </h2>
            <p className="text-[#2B2B2B]/60 mb-8">
              Now that you understand the basics, let's dive into the aiming fundamentals.
            </p>
            <Link to={createPageUrl('HowToAim')}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F56600] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
              >
                Learn How to Aim
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
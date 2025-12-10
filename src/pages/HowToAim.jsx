import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, Footprints, Eye, Move, Zap } from 'lucide-react';
import AnimatedSection from '../components/interactive/AnimatedSection';
import AimingDemo from '../components/interactive/AimingDemo';

const steps = [
  {
    icon: Footprints,
    title: "Perfect Your Stance",
    number: "01",
    description: "Stand with feet shoulder-width apart, weight slightly forward. Your lead foot should point toward where you expect to break the target. Stay relaxed but ready.",
    tips: ["Keep knees slightly bent", "Lean into your front foot", "Square shoulders to the target area"]
  },
  {
    icon: Eye,
    title: "Master the Lead",
    number: "02", 
    description: "Leading means pointing ahead of the moving target. The amount of lead depends on target speed, distance, and angle. Most beginners don't lead enough.",
    tips: ["Start with 2-3 feet of lead", "Increase lead for crossing shots", "Trust your instincts over calculations"]
  },
  {
    icon: Move,
    title: "Smooth Gun Movement",
    number: "03",
    description: "Mount the gun to your cheek first, then your shoulder. Your gun should move in a smooth arc matching the target's path. Never stop the gun.",
    tips: ["Practice mounting until it's automatic", "Keep your head down on the stock", "Move from your hips, not your arms"]
  },
  {
    icon: Zap,
    title: "Follow Through",
    number: "04",
    description: "Continue your swing after pulling the trigger. Many misses come from stopping the gun at the moment of firing. Keep moving!",
    tips: ["Think 'swing through' the target", "Don't peek at where you shot", "Maintain focus on the clay"]
  }
];

export default function HowToAim() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-[#F56600] text-sm font-semibold uppercase tracking-wider">Technique Guide</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mt-3 mb-6">
              How to Aim & Shoot
            </h1>
            <p className="text-lg text-[#2B2B2B]/70 leading-relaxed">
              Master the four fundamentals of trap shooting. With practice, 
              these movements become second nature.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection 
              key={step.number} 
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <motion.div 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-16`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Number & Icon */}
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#3F4A3C] to-[#5A6B55] flex items-center justify-center mb-4 shadow-lg"
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  <span className="text-6xl font-bold text-[#EAE6C3]">{step.number}</span>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 bg-white rounded-2xl p-8 border border-[#EAE6C3] hover:border-[#F56600]/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#2B2B2B] mb-4">{step.title}</h3>
                  <p className="text-[#2B2B2B]/70 mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="space-y-2">
                    <span className="text-sm font-semibold text-[#3F4A3C] uppercase tracking-wider">Pro Tips:</span>
                    <ul className="space-y-2">
                      {step.tips.map((tip, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-center gap-3 text-sm text-[#2B2B2B]/60"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F56600]" />
                          {tip}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 px-6 bg-[#EAE6C3]/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B2B2B] mb-2">
              Try It Yourself
            </h2>
            <p className="text-[#2B2B2B]/60">
              Practice your aim with this interactive demo. Move your cursor and click to shoot!
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <AimingDemo />
          </AnimatedSection>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B2B2B]">
              Common Mistakes to Avoid
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { mistake: "Lifting your head", fix: "Keep your cheek welded to the stock" },
              { mistake: "Stopping the gun", fix: "Always follow through the shot" },
              { mistake: "Not enough lead", fix: "When in doubt, lead more" },
              { mistake: "Tense grip", fix: "Hold firmly but stay relaxed" },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="bg-white rounded-xl p-6 border border-[#EAE6C3] hover:shadow-md transition-shadow"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 font-bold">✕</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#2B2B2B] line-through opacity-60">{item.mistake}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-500 font-bold text-sm">✓</span>
                        </div>
                        <p className="text-[#3F4A3C] font-medium">{item.fix}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#3F4A3C]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready for Real Practice?
            </h2>
            <p className="text-white/70 mb-8">
              The best way to learn is with hands-on instruction. Book a class and 
              put these techniques into action.
            </p>
            <Link to={createPageUrl('Classes')}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F56600] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
              >
                View Classes & Pricing
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
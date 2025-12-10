import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import CrosshairCursor from '../components/interactive/CrosshairCursor';
import ScrollIndicator from '../components/interactive/ScrollIndicator';
import AnimatedSection from '../components/interactive/AnimatedSection';
import IconCard from '../components/interactive/IconCard';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every session starts with comprehensive safety training. Your wellbeing is our top priority."
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from certified professionals with decades of competitive shooting experience."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our students consistently improve their accuracy and compete at regional levels."
    }
  ];

  return (
    <div className="relative">
      <CrosshairCursor />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=1920&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B2B2B]/60 via-[#2B2B2B]/40 to-[#FAFAF7]" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-[#F56600] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6"
            >
              Premier Trap Shooting Academy
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Learn Trap Shooting
              <br />
              <span className="text-[#F56600]">With Confidence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Master the art of clay target shooting with expert guidance. 
              From your first shot to competition-level skills, we're here for every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Classes')}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(245, 102, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F56600] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 justify-center hover:bg-[#F56600]/90 transition-colors"
                >
                  View Classes
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to={createPageUrl('WhatIsTrap')}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <ScrollIndicator />
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#F56600] text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mt-3 mb-4">
              The TrapSchool Difference
            </h2>
            <p className="text-[#2B2B2B]/60 max-w-2xl mx-auto">
              We combine world-class instruction with a passion for the sport to create 
              an unmatched learning experience.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <IconCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#3F4A3C]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Students Trained" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "50+", label: "Competition Wins" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                >
                  <span className="text-4xl md:text-5xl font-bold text-[#F56600]">{stat.number}</span>
                </motion.div>
                <p className="text-white/70 mt-2 text-sm uppercase tracking-wider">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6">
              Ready to Hit Your First Target?
            </h2>
            <p className="text-[#2B2B2B]/60 mb-10 text-lg">
              Join hundreds of students who've discovered the thrill of trap shooting. 
              Your journey starts with a single class.
            </p>
            <Link to={createPageUrl('Classes')}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(245, 102, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F56600] text-white px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2"
              >
                Browse Classes
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
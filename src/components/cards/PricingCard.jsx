import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

export default function PricingCard({ 
  title, 
  price, 
  duration, 
  features, 
  popular = false,
  delay = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative bg-white rounded-2xl p-8 shadow-sm border transition-shadow duration-300 hover:shadow-xl ${
        popular ? 'border-[#F56600] ring-2 ring-[#F56600]/20' : 'border-[#EAE6C3]'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#F56600] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-[#3F4A3C]">${price}</span>
          <span className="text-[#2B2B2B]/50">/{duration}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 * index }}
            className="flex items-center gap-3 text-[#2B2B2B]/70"
          >
            <div className="w-5 h-5 rounded-full bg-[#3F4A3C]/10 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-[#3F4A3C]" />
            </div>
            <span className="text-sm">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button 
          className={`w-full rounded-full py-6 font-medium transition-all duration-300 ${
            popular 
              ? 'bg-[#F56600] hover:bg-[#F56600]/90 text-white' 
              : 'bg-[#3F4A3C] hover:bg-[#3F4A3C]/90 text-white'
          }`}
        >
          Book Class
        </Button>
      </motion.div>
    </motion.div>
  );
}
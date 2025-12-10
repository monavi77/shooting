import { motion } from 'framer-motion';

export default function IconCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 border border-[#EAE6C3] hover:border-[#F56600]/30 hover:shadow-lg transition-all duration-300 group"
    >
      <motion.div 
        className="w-14 h-14 rounded-xl bg-[#3F4A3C]/10 flex items-center justify-center mb-4 group-hover:bg-[#F56600]/10 transition-colors duration-300"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-7 h-7 text-[#3F4A3C] group-hover:text-[#F56600] transition-colors duration-300" />
      </motion.div>
      <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2">{title}</h3>
      <p className="text-sm text-[#2B2B2B]/60 leading-relaxed">{description}</p>
    </motion.div>
  );
}
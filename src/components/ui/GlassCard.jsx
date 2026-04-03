import { motion } from 'framer-motion';

function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`glass rounded-2xl shadow-card transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default GlassCard;

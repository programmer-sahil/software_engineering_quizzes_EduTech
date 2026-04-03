import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-accent to-neon text-slate-900 shadow-glow hover:shadow-cyan-400/40',
  secondary: 'glass text-white hover:border-accent/70 hover:bg-white/10',
  ghost: 'bg-transparent text-slate-300 hover:text-white',
};

function Button({
  children,
  variant = 'primary',
  className = '',
  icon,
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </motion.button>
  );
}

export default Button;

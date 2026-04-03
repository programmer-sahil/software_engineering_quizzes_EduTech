import { AnimatePresence, motion } from 'framer-motion';

function SiteLoader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="glass rounded-2xl px-8 py-6 text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="mx-auto mb-3 h-10 w-10 rounded-full border-2 border-accent border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
            />
            <p className="font-display text-sm tracking-wide text-slate-200">Loading EduTech Experience...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SiteLoader;

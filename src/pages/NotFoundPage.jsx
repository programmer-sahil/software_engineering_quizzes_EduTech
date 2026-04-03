import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

function NotFoundPage() {
  return (
    <motion.main
      className="section-shell py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-3 font-display text-4xl text-white">Page not found</h1>
        <p className="mt-3 text-slate-300">The page you requested does not exist.</p>
        <Link to="/" className="mt-6 inline-block">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </motion.main>
  );
}

export default NotFoundPage;

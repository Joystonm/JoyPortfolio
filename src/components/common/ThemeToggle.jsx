import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="btn-glass p-3 rounded-full"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      data-cursor="hover"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

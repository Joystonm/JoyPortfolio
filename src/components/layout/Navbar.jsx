import { motion } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const Navbar = () => {
  const scrollDirection = useScrollDirection();

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'TIMELINE', href: '#timeline' }
  ];

  return (
    <motion.nav
      className={`navbar ${scrollDirection === 'down' ? 'nav-hidden' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="font-orbitron text-2xl font-black neon-text"
          whileHover={{ scale: 1.05 }}
          data-cursor="hover"
        >
          JOY.EXE
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="font-orbitron text-sm text-neon-cyan hover:text-white transition-colors relative group"
              data-cursor="hover"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* System Status */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-electric-green rounded-full animate-pulse-neon" />
            <span className="font-orbitron text-xs text-electric-green">ONLINE</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

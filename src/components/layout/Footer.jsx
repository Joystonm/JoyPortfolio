import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 py-12 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '30px 30px'
             }} 
        />
      </div>

      {/* Holographic Panel */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="hud-panel text-center energy-pulse"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Logo */}
          <motion.div
            className="mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-orbitron text-3xl font-black neon-text mb-2">
              JOY.EXE
            </h3>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto w-32" />
          </motion.div>

          {/* Status Indicators */}
          <motion.div
            className="flex justify-center space-x-8 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { label: 'SYSTEM', status: 'ONLINE', color: 'electric-green' },
              { label: 'STATUS', status: 'OPERATIONAL', color: 'neon-cyan' },
              { label: 'MODE', status: 'CREATIVE', color: 'neon-magenta' }
            ].map((item, index) => (
              <div key={item.label} className="flex items-center space-x-2">
                <div className={`w-2 h-2 bg-${item.color} rounded-full animate-pulse-neon`} />
                <span className="font-orbitron text-xs text-gray-400">
                  {item.label}: <span className={`text-${item.color}`}>{item.status}</span>
                </span>
              </div>
            ))}
          </motion.div>

          {/* Copyright with Heart Animation */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="font-orbitron text-sm text-gray-300">
              © {currentYear} Joy Portfolio. Built with{' '}
              <motion.span
                className="text-red-400 inline-block"
                animate={{ 
                  scale: [1, 1.2, 1],
                  textShadow: [
                    '0 0 5px rgba(248, 113, 113, 0.5)',
                    '0 0 20px rgba(248, 113, 113, 0.8)',
                    '0 0 5px rgba(248, 113, 113, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ❤️
              </motion.span>{' '}
              using <span className="gradient-text font-semibold">React</span> &{' '}
              <span className="gradient-text font-semibold">Tailwind CSS</span>
            </p>
          </motion.div>

          {/* Scan Line Effect */}
          <div className="scan-line absolute inset-0 rounded-lg" />
        </motion.div>
      </div>

      {/* Energy Orbs */}
      <div className="absolute bottom-10 left-20 w-3 h-3 bg-neon-cyan rounded-full animate-pulse-neon opacity-40" />
      <div className="absolute bottom-16 right-16 w-2 h-2 bg-electric-green rounded-full animate-pulse-neon opacity-60" />
      <div className="absolute bottom-8 right-32 w-4 h-4 bg-neon-magenta rounded-full animate-pulse-neon opacity-30" />
    </footer>
  );
};

export default Footer;

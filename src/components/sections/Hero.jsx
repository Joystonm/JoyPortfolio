import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'JOY PORTFOLIO';

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 150);
      }
    };
    typeWriter();

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="section-wrapper relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Holographic Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-orbitron font-black neon-text mb-4">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              |
            </span>
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto w-3/4 animate-pulse" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl font-exo text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          CRAFTING DIGITAL EXPERIENCES WITH{' '}
          <span className="gradient-text font-semibold">PRECISION</span> &{' '}
          <span className="gradient-text font-semibold">INNOVATION</span>
        </motion.p>

        {/* Holographic Panels */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {[
            { title: 'FRONTEND', desc: 'React • Java • Power BI' },
            { title: 'DESIGN', desc: 'UI/UX • Video Editing • Graphics' },
            { title: 'ENTERPRISE', desc: 'Salesforce • Analytics • CRM' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="hud-panel energy-pulse"
              data-cursor="hover"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.4)'
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-orbitron text-neon-cyan text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
              <div className="scan-line absolute inset-0 rounded-lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <button
            className="btn-sci-fi scan-line energy-border"
            data-cursor="hover"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            INITIALIZE SYSTEM
          </button>
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          className="flex justify-center space-x-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          {['ONLINE', 'SECURE', 'READY'].map((status, index) => (
            <div key={status} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-electric-green rounded-full animate-pulse-neon" />
              <span className="text-xs font-orbitron text-electric-green">{status}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Energy Orbs */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-neon-cyan rounded-full animate-pulse-neon opacity-60" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-neon-magenta rounded-full animate-pulse-neon opacity-40" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-electric-green rounded-full animate-pulse-neon opacity-50" />
    </section>
  );
};

export default Hero;

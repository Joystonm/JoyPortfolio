import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('INITIALIZING SYSTEM...');

  const bootSequence = [
    'INITIALIZING SYSTEM...',
    'LOADING NEURAL NETWORKS...',
    'CALIBRATING HOLOGRAPHIC DISPLAY...',
    'ESTABLISHING QUANTUM LINK...',
    'SYSTEM READY'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update text based on progress
        if (newProgress < 25) setCurrentText(bootSequence[0]);
        else if (newProgress < 50) setCurrentText(bootSequence[1]);
        else if (newProgress < 75) setCurrentText(bootSequence[2]);
        else if (newProgress < 95) setCurrentText(bootSequence[3]);
        else setCurrentText(bootSequence[4]);
        
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-space-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,255,255,0.2) 1px, transparent 1px)
               `,
               backgroundSize: '30px 30px'
             }} 
        />
      </div>

      <div className="text-center relative z-10">
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-orbitron text-6xl font-black neon-text mb-4">
            JOY.EXE
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto w-48" />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="font-orbitron text-neon-cyan text-lg mb-8"
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentText}
        </motion.p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="holographic rounded-full h-2 mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
            />
          </div>
          
          {/* Progress Percentage */}
          <motion.div
            className="font-orbitron text-electric-green text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {Math.round(progress)}% COMPLETE
          </motion.div>
        </div>

        {/* Scanning Lines - Simplified */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-full h-px bg-neon-cyan/20"
            animate={{ y: [0, 400] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Playground = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeExperiment, setActiveExperiment] = useState(0);

  const experiments = [
    {
      id: 1,
      title: "Magnetic Button",
      description: "A button that follows your cursor with magnetic attraction",
      component: <MagneticButton />
    },
    {
      id: 2,
      title: "Floating Cards",
      description: "Cards that float and tilt based on mouse movement",
      component: <FloatingCard />
    },
    {
      id: 3,
      title: "Particle System",
      description: "Interactive particle system that responds to cursor",
      component: <ParticleSystem />
    }
  ];

  return (
    <section id="playground" className="section-wrapper" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Creative <span className="gradient-text">Playground</span>
        </motion.h2>

        <motion.p
          className="text-xl text-white/80 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of interactive experiments and UI components that showcase creative possibilities
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experiment Selector */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {experiments.map((experiment, index) => (
              <motion.div
                key={experiment.id}
                className={`card-glass p-4 cursor-pointer transition-all duration-300 ${
                  activeExperiment === index ? 'border-primary border-2' : ''
                }`}
                onClick={() => setActiveExperiment(index)}
                data-cursor="hover"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold mb-2">{experiment.title}</h3>
                <p className="text-white/70 text-sm">{experiment.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experiment Display */}
          <motion.div
            className="card-glass p-8 min-h-[400px] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {experiments[activeExperiment].component}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Experiment Components
const MagneticButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        className="btn btn-primary px-8 py-4 text-lg"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        data-cursor="hover"
      >
        Magnetic Button
      </motion.button>
    </div>
  );
};

const FloatingCard = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = (e.clientY - centerY) / 10;
    const rotateY = (centerX - e.clientX) / 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full h-full flex items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-48 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-semibold"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        Floating Card
      </motion.div>
    </div>
  );
};

const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);

  const createParticle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newParticle = {
      id: Date.now(),
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
    };

    setParticles(prev => [...prev, newParticle]);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 2000);
  };

  return (
    <div
      className="w-full h-full relative bg-black/20 rounded-2xl cursor-crosshair overflow-hidden"
      onClick={createParticle}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white/60">
        Click to create particles
      </div>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-primary rounded-full"
          initial={{ x: particle.x, y: particle.y, scale: 0 }}
          animate={{
            x: particle.x + particle.vx * 50,
            y: particle.y + particle.vy * 50,
            scale: [0, 1, 0],
            opacity: [1, 1, 0]
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export default Playground;

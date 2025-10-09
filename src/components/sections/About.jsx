import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: 'PROJECTS COMPLETED', value: '50+', color: 'neon-cyan' },
    { label: 'TECHNOLOGIES MASTERED', value: '20+', color: 'electric-green' },
    { label: 'CLIENT SATISFACTION', value: '100%', color: 'neon-cyan' }
  ];

  const skills = [
    'REACT.JS', 'JAVA', 'POWER BI', 'SALESFORCE', 'VIDEO EDITING'
  ];

  return (
    <section id="about" className="section-wrapper relative" ref={ref}>
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,0,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-5xl font-black neon-text mb-4">
            SYSTEM <span className="gradient-text">PROFILE</span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-neon-magenta to-transparent mx-auto w-64" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Data */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hud-panel energy-pulse">
              <div className="scan-line absolute inset-0 rounded-lg" />
              <h3 className="font-orbitron text-neon-cyan text-xl mb-4">DEVELOPER.EXE</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Advanced full-stack developer specializing in creating immersive digital experiences. 
                Proficient in modern web technologies with expertise in React ecosystem, 
                backend development, and UI/UX design principles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionate about pushing the boundaries of web development through innovative 
                solutions and cutting-edge technologies. Always learning, always evolving.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="hud-panel">
              <h4 className="font-orbitron text-electric-green text-lg mb-4">CORE_TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-xs font-orbitron bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan rounded"
                    data-cursor="hover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Panel */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="hud-panel group"
                data-cursor="hover"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-orbitron text-xs text-gray-400 mb-1">{stat.label}</p>
                    <p className={`font-orbitron text-2xl font-black text-${stat.color}`}>
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-3 h-3 bg-${stat.color} rounded-full animate-pulse-neon`} />
                </div>
                <div className="scan-line absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}

            {/* Mission Statement */}
            <motion.div
              className="hud-panel border-electric-green/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <h4 className="font-orbitron text-electric-green text-sm mb-3">MISSION_DIRECTIVE</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                "To craft digital experiences that bridge the gap between imagination and reality, 
                using code as the medium to create tomorrow's web today."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Energy Orbs */}
        <div className="absolute top-20 right-10 w-3 h-3 bg-neon-magenta rounded-full animate-pulse-neon opacity-60" />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-electric-green rounded-full animate-pulse-neon opacity-50" />
      </div>
    </section>
  );
};

export default About;

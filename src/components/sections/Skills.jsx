import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '../../data/skills';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="section-wrapper relative" ref={ref}>
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,0,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-black neon-text mb-4">
            SYSTEM <span className="gradient-text">DIAGNOSTICS</span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-neon-magenta to-transparent mx-auto w-48 md:w-64" />
          <p className="font-exo text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            ANALYZING CORE COMPETENCIES... DISPLAYING SKILL MATRIX STATUS
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hud-panel flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 md:px-6 py-2 md:py-3 font-orbitron text-xs md:text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-neon-magenta text-black'
                    : 'text-neon-magenta hover:bg-neon-magenta/10'
                }`}
                data-cursor="hover"
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {category.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4"
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skills[activeCategory]?.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="hud-panel group"
              data-cursor="hover"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 30px rgba(255, 0, 255, 0.3)'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              {/* Skill Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-orbitron text-lg font-bold text-neon-magenta">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{skill.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-green rounded-full animate-pulse-neon" />
                  <span className="font-orbitron text-xs text-electric-green">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-sans text-gray-400 mb-2">
                  <span>PROFICIENCY</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-magenta to-electric-green"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    style={{ 
                      boxShadow: '0 0 10px rgba(255, 0, 255, 0.5)' 
                    }}
                  />
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                {/* Status Indicator */}
                <div className="flex justify-between text-xs">
                  <span className="font-sans text-gray-400">STATUS</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-electric-green rounded-full animate-pulse-neon" />
                    <span className="font-sans text-xs text-electric-green">
                      OPERATIONAL
                    </span>
                  </div>
                </div>
              </div>

              {/* Scan Line Effect */}
              <div className="scan-line absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* System Summary */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { label: 'TOTAL SKILLS', value: Object.values(skills).flat().length, color: 'neon-cyan' },
            { label: 'AVG PROFICIENCY', value: '87%', color: 'neon-magenta' },
            { label: 'SYSTEM STATUS', value: 'OPTIMAL', color: 'electric-green' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="hud-panel text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <p className="font-orbitron text-xs text-gray-400 mb-2">{stat.label}</p>
              <p className={`font-orbitron text-2xl font-black text-${stat.color}`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Energy Orbs */}
        <div className="absolute top-32 left-20 w-3 h-3 bg-neon-magenta rounded-full animate-pulse-neon opacity-60" />
        <div className="absolute bottom-32 right-16 w-4 h-4 bg-electric-green rounded-full animate-pulse-neon opacity-40" />
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { timeline } from '../../data/timeline';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="section-wrapper relative" ref={ref}>
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '80px 80px'
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
            MISSION <span className="gradient-text">TIMELINE</span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto w-64" />
          <p className="font-exo text-gray-400 mt-6 max-w-2xl mx-auto">
            CHRONOLOGICAL LOG OF DEVELOPMENT MILESTONES AND ACHIEVEMENTS
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Energy Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-magenta to-electric-green opacity-60" />
          
          {/* Floating Energy Orb */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-cyan rounded-full z-10"
            style={{ boxShadow: '0 0 20px #00FFFF' }}
            animate={isInView ? { y: [0, 800] } : {}}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              >
                {/* Timeline Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    className="hud-panel group"
                    data-cursor="hover"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)'
                    }}
                  >
                    {/* Date Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-orbitron text-xs text-electric-green bg-electric-green/10 px-3 py-1 rounded border border-electric-green/30">
                        {item.date}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse-neon" />
                        <span className="font-orbitron text-xs text-neon-cyan">LOGGED</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-orbitron text-xl font-bold text-neon-cyan mb-2">
                      {item.title}
                    </h3>
                    <h4 className="font-exo text-neon-magenta mb-3">
                      {item.company}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skills/Technologies */}
                    {item.skills && (
                      <div className="flex flex-wrap gap-1">
                        {item.skills.slice(0, 4).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 text-xs font-orbitron bg-neon-magenta/10 border border-neon-magenta/30 text-neon-magenta rounded"
                          >
                            {skill}
                          </span>
                        ))}
                        {item.skills.length > 4 && (
                          <span className="px-2 py-1 text-xs font-orbitron text-gray-500">
                            +{item.skills.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Scan Line Effect */}
                    <div className="scan-line absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  >
                    {/* Node Circle */}
                    <div className="w-6 h-6 bg-space-black border-2 border-neon-cyan rounded-full relative z-10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse-neon" />
                    </div>
                    
                    {/* Node Glow */}
                    <div className="absolute inset-0 w-6 h-6 bg-neon-cyan rounded-full opacity-20 animate-pulse-neon" />
                    
                    {/* Connection Lines */}
                    <div className={`absolute top-3 w-8 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? 'left-6 from-neon-cyan to-transparent' 
                        : 'right-6 from-transparent to-neon-cyan'
                    }`} />
                  </motion.div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>

          {/* Timeline End Marker */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="hud-panel px-6 py-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-electric-green rounded-full animate-pulse-neon" />
                <span className="font-orbitron text-electric-green text-sm">
                  MISSION CONTINUES...
                </span>
                <div className="w-3 h-3 bg-electric-green rounded-full animate-pulse-neon" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Energy Orbs */}
        <div className="absolute top-20 right-16 w-3 h-3 bg-neon-magenta rounded-full animate-pulse-neon opacity-50" />
        <div className="absolute bottom-20 left-16 w-4 h-4 bg-electric-green rounded-full animate-pulse-neon opacity-40" />
      </div>
    </section>
  );
};

export default Timeline;

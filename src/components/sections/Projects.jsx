import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects } from '../../data/projects';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'FRONTEND', 'FULLSTACK', 'MOBILE'];
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(project => project.category?.toUpperCase() === activeCategory);

  return (
    <section id="projects" className="section-wrapper relative" ref={ref}>
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(57,255,20,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(57,255,20,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px'
             }} 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-5xl font-black neon-text mb-4">
            PROJECT <span className="gradient-text">DATABASE</span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-electric-green to-transparent mx-auto w-64" />
          <p className="font-exo text-gray-400 mt-6 max-w-2xl mx-auto">
            ACCESSING SECURE PROJECT ARCHIVES... DISPLAYING CLASSIFIED DEVELOPMENT RECORDS
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hud-panel flex space-x-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 font-orbitron text-xs transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-electric-green text-black'
                    : 'text-electric-green hover:bg-electric-green/10'
                }`}
                data-cursor="hover"
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="hud-panel group cursor-pointer relative overflow-hidden"
              data-cursor="hover"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.3)'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Status */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-green rounded-full animate-pulse-neon" />
                  <span className="font-orbitron text-xs text-electric-green">ACTIVE</span>
                </div>
                <span className="font-orbitron text-xs text-neon-cyan">
                  ID: {String(index + 1).padStart(3, '0')}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative mb-4 overflow-hidden rounded border border-neon-cyan/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-black/80 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <h3 className="font-orbitron text-xl font-bold text-neon-cyan">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies?.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-orbitron bg-neon-magenta/10 border border-neon-magenta/30 text-neon-magenta rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies?.length > 3 && (
                    <span className="px-2 py-1 text-xs font-orbitron text-gray-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 py-2 font-orbitron text-xs border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-colors">
                    VIEW_CODE
                  </button>
                  <button className="flex-1 py-2 font-orbitron text-xs border border-electric-green/50 text-electric-green hover:bg-electric-green/10 transition-colors">
                    LIVE_DEMO
                  </button>
                </div>
              </div>

              {/* Scan Line Effect */}
              <div className="scan-line absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="hud-panel max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-orbitron text-2xl font-bold neon-text">
                  {selectedProject.title}
                </h3>
                <button
                  className="text-neon-cyan hover:text-white transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-orbitron bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Energy Orbs */}
        <div className="absolute top-32 left-10 w-4 h-4 bg-electric-green rounded-full animate-pulse-neon opacity-40" />
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-neon-cyan rounded-full animate-pulse-neon opacity-60" />
      </div>
    </section>
  );
};

export default Projects;

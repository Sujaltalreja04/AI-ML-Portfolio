import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Code, Globe, BarChart3, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Quantum Dashboard',
    description: 'Futuristic admin dashboard with 3D data visualization and real-time analytics',
    icon: Code,
    tags: ['React', 'Three.js', 'WebGL'],
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    title: 'Neo E-Commerce',
    description: 'Immersive shopping experience with 3D product previews and AR integration',
    icon: Globe,
    tags: ['Vue.js', 'WebXR', 'Node.js'],
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    title: 'Data Sphere',
    description: 'Interactive 3D data visualization platform for complex datasets and analytics',
    icon: BarChart3,
    tags: ['D3.js', 'Canvas', 'Python'],
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    title: 'AI Portfolio Generator',
    description: 'Intelligent portfolio builder with machine learning recommendations',
    icon: Code,
    tags: ['React', 'TensorFlow', 'Express'],
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    title: 'MetaVerse Hub',
    description: 'Virtual reality social platform with spatial audio and avatars',
    icon: Globe,
    tags: ['WebGL', 'Socket.io', 'MongoDB'],
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    title: 'Neural Network Viz',
    description: 'Real-time neural network visualization and training dashboard',
    icon: BarChart3,
    tags: ['TypeScript', 'WebGL', 'PyTorch'],
    gradient: 'from-gray-600 to-gray-800',
  },
];

export const ProjectsSection = () => {
  const [ref, isInView] = useInView();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isFlipped = flippedCards.includes(index);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative h-80"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative w-full h-full transition-transform duration-700 preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className="absolute inset-0 backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-xl p-6 backface-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                    }}
                    onClick={() => toggleFlip(index)}
                  >
                    <div
                      className={`mb-4 h-40 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-6 gap-1 p-4">
                          {[...Array(24)].map((_, i) => (
                            <div key={i} className="w-full aspect-square bg-gray-400 rounded" />
                          ))}
                        </div>
                      </div>
                      <Icon className="w-16 h-16 text-gray-400 z-10" />
                    </div>

                    <h3
                      className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs backdrop-blur-md bg-[rgba(26,26,26,0.5)] border border-[rgba(192,192,192,0.2)] px-3 py-1 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 backdrop-blur-md bg-[rgba(26,26,26,0.9)] border border-[rgba(192,192,192,0.3)] rounded-xl p-6 backface-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      boxShadow: '0 0 40px rgba(192, 192, 192, 0.3)',
                    }}
                    onClick={() => toggleFlip(index)}
                  >
                    <h3
                      className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <div className="space-y-3">
                      <motion.button
                        className="w-full backdrop-blur-md bg-[rgba(192,192,192,0.1)] border border-[rgba(192,192,192,0.3)] rounded-lg px-4 py-3 text-gray-300 font-semibold flex items-center justify-center gap-2"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 20px rgba(192, 192, 192, 0.4)',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        VIEW PROJECT
                      </motion.button>

                      <motion.button
                        className="w-full backdrop-blur-md bg-[rgba(192,192,192,0.1)] border border-[rgba(192,192,192,0.3)] rounded-lg px-4 py-3 text-gray-300 font-semibold flex items-center justify-center gap-2"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 20px rgba(192, 192, 192, 0.4)',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code size={18} />
                        VIEW CODE
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

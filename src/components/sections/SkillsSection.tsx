import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useInView } from '../../hooks/useInView';
import { SkillOrb } from '../3d/SkillOrb';
import {
  Code,
  Layers,
  Cpu,
  Wind,
  Database,
  Grid,
  Box,
  GitBranch,
} from 'lucide-react';

const skills = [
  { name: 'HTML5', level: 95, icon: Code, color: '#808080' },
  { name: 'CSS3', level: 90, icon: Layers, color: '#909090' },
  { name: 'JavaScript', level: 88, icon: Cpu, color: '#a0a0a0' },
  { name: 'Tailwind', level: 92, icon: Wind, color: '#888888' },
  { name: 'PHP', level: 85, icon: Database, color: '#989898' },
  { name: 'WordPress', level: 87, icon: Grid, color: '#787878' },
  { name: 'Three.js', level: 82, icon: Box, color: '#b0b0b0' },
  { name: 'APIs', level: 90, icon: GitBranch, color: '#888888' },
];

export const SkillsSection = () => {
  const [ref, isInView] = useInView();

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)' }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          TECHNICAL SKILLS
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block h-[500px]">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

              {skills.map((skill, index) => {
                const angle = (index / skills.length) * Math.PI * 2;
                const radius = 4;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <SkillOrb
                    key={index}
                    position={[x, y, 0]}
                    color={skill.color}
                    speed={0.5 + Math.random() * 0.5}
                  />
                );
              })}

              <mesh>
                <torusGeometry args={[4, 0.05, 16, 100]} />
                <meshBasicMaterial color="#404040" transparent opacity={0.3} />
              </mesh>
            </Canvas>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-xl p-6"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(192, 192, 192, 0.3)',
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color} 0%, #606060 100%)`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className="text-lg font-bold bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {skill.name}
                    </h3>
                  </div>

                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color} 0%, #a0a0a0 100%)`,
                      }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">Proficiency</span>
                    <motion.span
                      className="text-xs font-bold text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

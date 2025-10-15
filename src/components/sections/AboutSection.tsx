import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export const AboutSection = () => {
  const [ref, isInView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 md:py-20 relative"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)' }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              ABOUT ME
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              I'm a passionate web developer who thrives on creating visually bold, interactive,
              and technically robust digital experiences. My expertise lies in blending cutting-edge
              technology with elegant design principles.
            </p>

            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              With a focus on futuristic UI/UX and immersive 3D elements, I transform complex
              ideas into seamless, engaging web solutions that leave a lasting impact.
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <motion.div
                className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl px-3 py-3 md:px-6 md:py-4 text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)',
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  50+
                </div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">PROJECTS</div>
              </motion.div>

              <motion.div
                className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl px-3 py-3 md:px-6 md:py-4 text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)',
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  3Y+
                </div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">EXPERIENCE</div>
              </motion.div>

              <motion.div
                className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl px-3 py-3 md:px-6 md:py-4 text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)',
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  100%
                </div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">DEDICATION</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mt-8 md:mt-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 opacity-30"
                  style={{
                    borderColor: `rgba(${128 + i * 30}, ${128 + i * 30}, ${128 + i * 30}, ${0.3 + i * 0.2})`,
                    inset: `${i * 20}px`,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
                  style={{ boxShadow: '0 0 40px rgba(192, 192, 192, 0.3)' }}
                >
                  <span
                    className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    ST
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

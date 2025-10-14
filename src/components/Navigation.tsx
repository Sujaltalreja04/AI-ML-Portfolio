import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const navLinks = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 z-50"
        style={{ scaleX: scrollProgress / 100, transformOrigin: 'left' }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-6xl"
      >
        <div
          className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-2xl px-6 py-4"
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}
        >
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              whileHover={{ scale: 1.05 }}
            >
              SUJAL.T
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-sm font-semibold transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-gray-300'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600"
                      style={{ boxShadow: '0 0 10px rgba(192, 192, 192, 0.5)' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              className="md:hidden text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 z-30 md:hidden"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={() => setIsOpen(false)} />
          <motion.div className="absolute right-0 top-0 h-full w-64 bg-[#1a1a1a] border-l border-gray-700 p-8">
            <div className="flex flex-col space-y-6 mt-20">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg font-semibold text-gray-300 hover:text-white transition-colors"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

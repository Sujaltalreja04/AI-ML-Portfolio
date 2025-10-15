import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 md:py-20 relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-16 text-center bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          GET IN TOUCH
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6 mb-8 md:mb-12"
          >
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[rgba(192,192,192,0.5)] transition-all"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[rgba(192,192,192,0.5)] transition-all"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[rgba(192,192,192,0.5)] transition-all"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className="w-full backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[rgba(192,192,192,0.5)] transition-all resize-none"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.3)] rounded-lg md:rounded-xl px-6 py-3 md:px-8 md:py-4 text-sm md:text-base text-gray-300 font-semibold flex items-center justify-center gap-2 md:gap-3"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(192, 192, 192, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    SENDING...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 rounded-full bg-green-500"
                    />
                    MESSAGE SENT!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    SEND MESSAGE
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl p-4 md:p-6 text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(192, 192, 192, 0.3)',
              }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" />
              </motion.div>
              <div
                className="text-sm md:text-base font-bold text-gray-300 mb-1 md:mb-2"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                EMAIL
              </div>
              <div className="text-gray-400 text-xs md:text-sm">sujal@example.com</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl p-4 md:p-6 text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(192, 192, 192, 0.3)',
              }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" />
              </motion.div>
              <div
                className="text-sm md:text-base font-bold text-gray-300 mb-1 md:mb-2"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                PHONE
              </div>
              <div className="text-gray-400 text-xs md:text-sm">+1 (555) 123-4567</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl p-4 md:p-6 text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(192, 192, 192, 0.3)',
              }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" />
              </motion.div>
              <div
                className="text-sm md:text-base font-bold text-gray-300 mb-1 md:mb-2"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                LOCATION
              </div>
              <div className="text-gray-400 text-xs md:text-sm">Global Remote</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

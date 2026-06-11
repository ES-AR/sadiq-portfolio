'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'backOut' },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  const buttonTap = {
    scale: 0.95,
  };

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto text-center">
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="inline-block"
          variants={badgeVariants}
          whileHover="hover"
        >
          <div className="px-4 py-1 rounded-full bg-black text-white text-sm font-medium">
            Product & UI/UX Designer
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          variants={itemVariants}
        >
          Sadiq Ridwan Abubakar
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Creative Product and UI/UX Designer passionate about building modern,
          user-centered digital experiences for web and mobile applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center pt-4"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.linkedin.com/in/sadiq-ridwan-abubakar-b6a1621b9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-black text-white font-medium"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            LinkedIn
          </motion.a>

          <motion.a
            href="mailto:yourmail@example.com"
            className="px-6 py-3 rounded-2xl border border-gray-300 font-medium hover:bg-gray-100"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-16 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;

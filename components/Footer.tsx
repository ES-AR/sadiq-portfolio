'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const buttonHover = {
    scale: 1.05,
    boxShadow: '0 10px 25px -5rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.2 },
  };

  const buttonTap = {
    scale: 0.95,
  };

  return (
    <footer className="px-6 py-12 text-center border-t bg-gray-50">
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h3
          className="text-2xl font-bold"
          variants={itemVariants}
        >
          Let's Work Together
        </motion.h3>

        <motion.p className="text-gray-600" variants={itemVariants}>
          Open to collaborations, freelance projects, and product design opportunities.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.a
            href="https://www.linkedin.com/in/sadiq-ridwan-abubakar-b6a1621b9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-2xl bg-black text-white font-medium"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Connect on LinkedIn
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 pt-4"
          variants={containerVariants}
        >
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sadiq-ridwan-abubakar-b6a1621b9' },
            { label: 'Email', href: 'mailto:yourmail@example.com' },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 font-medium"
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-gray-500 text-sm pt-4"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Sadiq Ridwan Abubakar. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;

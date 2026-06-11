'use client';

import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -5,
      boxShadow: '0 20px 25px -5rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  };

  const infoItems = [
    { label: 'Experience:', value: '3 Years' },
    { label: 'Specialization:', value: 'Product & UI/UX Design' },
    { label: 'Location:', value: 'Nigeria' },
    { label: 'Tools:', value: 'Figma, Canva, React, Tailwind CSS' },
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-600 leading-relaxed mb-4"
            variants={itemVariants}
          >
            I am a Product and UI/UX Designer with experience designing user-friendly
            interfaces, responsive websites, dashboards, and mobile applications.
            I enjoy turning ideas into visually engaging and functional digital products.
          </motion.p>

          <motion.p
            className="text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            My skills include user research, wireframing, prototyping, interaction
            design, and frontend collaboration using tools like Figma, Canva, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="bg-gray-100 rounded-3xl p-8 shadow-sm"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-2xl font-semibold mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Quick Info
          </motion.h3>

          <motion.div
            className="space-y-4 text-gray-700"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="py-2 border-b border-gray-200 last:border-0"
              >
                <span className="font-semibold">{item.label}</span>{' '}
                <span>{item.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

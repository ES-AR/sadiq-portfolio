'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'UI/UX Design',
    'Figma',
    'Wireframing',
    'Prototyping',
    'User Research',
    'Responsive Design',
    'Canva',
    'React',
    'Tailwind CSS',
    'Web Design',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const skillHover = {
    scale: 1.08,
    backgroundColor: '#f3f4f6',
    boxShadow: '0 10px 25px -5rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.2 },
  };

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="px-5 py-3 bg-gray-100 rounded-2xl text-gray-700 font-medium cursor-pointer"
              variants={itemVariants}
              whileHover={skillHover}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

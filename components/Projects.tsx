'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Flower Delivery Website',
      description: 'Designed and developed a modern flower delivery platform with an admin dashboard.',
      tag: 'MERN Stack',
    },
    {
      title: 'Fashion Brand Website',
      description: 'UI/UX design and frontend structure for a fashion business website.',
      tag: 'UI/UX Design',
    },
    {
      title: 'Smart Dashboard Concept',
      description: 'Created a schedule-aware smart dashboard focused on productivity and usability.',
      tag: 'Product Design',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -10,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A few projects and concepts I have worked on.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-sm p-6 group"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Image Placeholder */}
              <motion.div
                className="h-40 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 mb-5 overflow-hidden"
                variants={imageVariants}
              >
                <motion.div
                  className="w-full h-full"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{
                    backgroundImage:
                      'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
                    backgroundSize: '20px 20px',
                  }}
                />
              </motion.div>

              {/* Content */}
              <motion.h3
                className="text-2xl font-semibold mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              {/* Tag */}
              <motion.span
                className="inline-block text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.95 }}
              >
                {project.tag}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

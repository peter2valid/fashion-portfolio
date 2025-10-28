import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Static projects with local images
  const projects = [
    {
      _id: '1',
      title: 'Fashion Week 2024',
      client: 'Elite Models',
      description: 'Runway showcase featuring contemporary African fashion',
      image: '/images/portfolio-pic-1.jpg',
      date: '2024-09-15',
    },
    {
      _id: '2',
      title: 'Editorial Shoot',
      client: 'Vogue Kenya',
      description: 'High fashion editorial spread celebrating Kenyan elegance',
      image: '/images/portfolio-pic-2.jpg',
      date: '2024-08-20',
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-fashion text-4xl md:text-6xl text-fashionRed mb-4">
            Portfolio
          </h2>
          <p className="font-body text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            A curated selection of my recent work and collaborations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project._id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-fashion text-2xl mb-2">{project.title}</h3>
                  {project.client && (
                    <p className="font-body text-sm text-white/80 mb-2">
                      Client: {project.client}
                    </p>
                  )}
                  {project.description && (
                    <p className="font-body text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                  )}
                  {project.date && (
                    <p className="font-body text-xs text-white/60 mt-2">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                    </p>
                  )}
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


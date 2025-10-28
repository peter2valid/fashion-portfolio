import React from 'react';
import { motion } from 'framer-motion';
import Starburst from './Starburst';

const MissionSection = () => {
  // Static content with local images
  const content = {
    title: 'MY MISSION',
    layoutImage: '/images/my-mission.jpg',
  };

  const missions = [
    { 
      number: '01', 
      title: 'Deliver Dynamic Performance',
      text: 'Bring exceptional energy, creativity, and professional discipline to every project, informed by my athletic background.'
    },
    { 
      number: '02', 
      title: 'Collaborate with Purpose',
      text: 'Partner with visionary brands and creatives to produce fashion moments that are as strong and authentic as they are beautiful.'
    },
    { 
      number: '03', 
      title: 'Inspire Authentically',
      text: 'Empower the next generation by sharing my genuine passion for a life that beautifully blends fashion, fitness, and community service.'
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-6 bg-[#DADADA]">
      <motion.div
        className="relative z-10 max-w-7xl w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Black Border Frame */}
        <div className="border-2 border-borderBlack bg-white p-8 sm:p-12 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              {/* Title with Starburst */}
              <div className="flex items-center gap-4 mb-6">
                <Starburst className="flex-shrink-0" />
                <h2 className="font-fashion text-4xl sm:text-5xl md:text-6xl text-fashionRed">
                  {content.title}
                </h2>
              </div>

              {/* Mission Points */}
              <div className="space-y-8">
                {missions.map((mission, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <div className="font-fashion text-4xl sm:text-5xl text-fashionRed font-bold flex-shrink-0 pt-1">
                      {mission.number}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-fashion text-xl sm:text-2xl text-textBlack font-semibold">
                        | {mission.title}
                      </h3>
                      <p className="font-body text-base md:text-lg text-textBlack/80 leading-relaxed">
                        {mission.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Layout Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-2 border-borderBlack overflow-hidden shadow-lg">
                <img
                  src={content.layoutImage}
                  alt="Mission"
                  className="w-full h-auto object-cover"
                />
              </div>
              <Starburst className="absolute -bottom-3 -right-3" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionSection;


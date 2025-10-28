import React from 'react';
import { motion } from 'framer-motion';
import Starburst from './Starburst';

const VisionSection = () => {
  // Static content with local images
  const content = {
    title: 'MY VISION',
    bodyText: `To redefine beauty standards in the fashion industry through authentic representation and artistic expression. I envision a future where models are celebrated not just for their appearance, but for the stories they tell and the emotions they evoke.

My goal is to work with brands that value creativity, diversity, and innovation. Together, we can create campaigns that inspire and resonate with audiences worldwide.`,
    layoutImage: '/images/myvision.jpg',
  };

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
            {/* Left: Layout Image */}
            <motion.div
              className="relative order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-2 border-borderBlack overflow-hidden shadow-lg grayscale">
                <img
                  src={content.layoutImage}
                  alt="Vision"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <div className="space-y-6 order-1 md:order-2">
              {/* Title with Starburst */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-fashion text-4xl sm:text-5xl md:text-6xl text-fashionRed">
                  {content.title}
                </h2>
                <Starburst className="flex-shrink-0" />
              </div>

              {/* Body Text */}
              <div className="font-body text-base md:text-lg text-textBlack leading-relaxed space-y-4">
                {typeof content.bodyText === 'string'
                  ? content.bodyText.split('\n\n').map((para, idx) => (
                      <p key={idx} className="text-justify">
                        {para}
                      </p>
                    ))
                  : <p>{content.bodyText}</p>
                }
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VisionSection;


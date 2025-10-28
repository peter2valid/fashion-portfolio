import React from 'react';
import { motion } from 'framer-motion';
import Starburst from './Starburst';

const AboutSection = () => {
  // Static content with local images
  const content = {
    title: 'ABOUT ME',
    bodyText: `I'm Hope Ntinyari, a passionate model and fashion enthusiast dedicated to bringing elegance and artistry to every frame. With experience in editorial shoots, runway shows, and brand campaigns, I strive to tell compelling stories through fashion.

My journey in modeling has been shaped by a commitment to professionalism, creativity, and authentic expression. I believe in the transformative power of fashion to inspire and empower.`,
    backgroundImage: '/images/hero.jpg',
    accentImage: '/images/aboutme.jpg',
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
      style={{
        backgroundImage: `url(${content.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Black Border Frame */}
        <div className="border-2 border-borderBlack bg-creamBg p-8 sm:p-12 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              {/* Title with Starburst */}
              <div className="flex items-center gap-4 mb-6">
                <Starburst className="flex-shrink-0" />
                <h2 className="font-fashion text-4xl sm:text-5xl md:text-6xl text-fashionRed">
                  {content.title}
                </h2>
              </div>

              {/* Body Text */}
              <div className="font-body text-base md:text-lg text-textBlack leading-relaxed space-y-4">
                {typeof content.bodyText === 'string'
                  ? content.bodyText.split('\n\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))
                  : <p>{content.bodyText}</p>
                }

                {/* Charity Involvement - Ark Community */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="mt-6 text-textBlack/90 leading-relaxed"
                >
                  Beyond modeling, Hope is deeply involved in <span className="font-semibold text-fashionRed">Ark Community</span> — 
                  a youth-driven charity organization committed to uplifting underprivileged groups across Kenya. 
                  Through Ark, she regularly visits children's homes, supports the elderly, and helps organize community outreach events 
                  that inspire kindness and connection.
                </motion.p>

                {/* Ark Community Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="mt-6"
                >
                  <a
                    href="https://www.instagram.com/the_ark_community"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-fashionRed/60 rounded-full text-fashionRed font-semibold hover:bg-fashionRed/10 hover:border-fashionRed transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <span>Visit Ark Community</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Right: Accent Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="border-2 border-borderBlack overflow-hidden shadow-xl">
                <img
                  src={content.accentImage}
                  alt="Hope Ntinyari"
                  className="w-full h-auto object-cover"
                />
              </div>
              <Starburst className="absolute -top-3 -right-3" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;


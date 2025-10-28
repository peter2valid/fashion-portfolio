import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const UpdatedFooter = () => {
  const socialLinks = {
    whatsapp: 'https://wa.me/254792822887',
    instagram: 'https://www.instagram.com/ntinyari.hope',
    tiktok: 'https://www.tiktok.com/@ntinyarihope',
    email: 'mailto:ntinyarihope1@gmail.com',
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h2 className="font-signature text-4xl text-fashionRed mb-4">
              Hope Ntinyari
            </h2>
            <p className="font-body text-white/70 leading-relaxed">
              Model / Sport & Wellness / Fashion Enthusiast
              <br />
              Bringing elegance and artistry to every frame
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-fashion text-xl mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="font-body text-white/70 hover:text-fashionRed transition-colors duration-300 inline-block"
                >
                  → Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  className="font-body text-white/70 hover:text-fashionRed transition-colors duration-300 inline-block"
                >
                  → Videos
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="font-body text-white/70 hover:text-fashionRed transition-colors duration-300 inline-block"
                >
                  → Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-fashion text-xl mb-4 text-white">
              Connect
            </h3>
            <p className="font-body text-white/70 mb-4 text-sm">
              Follow me on social media for the latest updates and behind-the-scenes content.
            </p>
            <div className="flex gap-4">
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-fashionRed flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="text-xl" />
              </motion.a>

              <motion.a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-fashionRed flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTiktok className="text-xl" />
              </motion.a>

              <motion.a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-fashionRed flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp className="text-xl" />
              </motion.a>

              <motion.a
                href={socialLinks.email}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-fashionRed flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope className="text-xl" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-white/60">
            © {currentYear} Hope Ntinyari. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="/admin"
              className="font-body text-xs text-white/40 hover:text-fashionRed transition-colors duration-300"
            >
              Admin
            </a>
          </div>
        </div>

        {/* Developer Signature - Distinct Tech Style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 pt-8 border-t border-cyan-500/20 text-center"
        >
          {/* Code-style bracket decoration */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-cyan-400 text-2xl font-mono">&lt;</span>
            <p className="text-gray-400 text-xs font-mono tracking-widest uppercase">
              Developed By
            </p>
            <span className="text-cyan-400 text-2xl font-mono">/&gt;</span>
          </div>

          <motion.h3
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-bold text-2xl md:text-3xl mb-2 tracking-tight"
            style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
            whileHover={{ 
              scale: 1.05,
              filter: "drop-shadow(0 0 12px rgba(34, 211, 238, 0.5))",
              transition: { duration: 0.3 }
            }}
          >
            PETER NJOROGE IRUNGU
          </motion.h3>

          <p className="text-gray-500 text-sm font-mono mb-5">
            Full-Stack Developer • UI/UX Designer
          </p>

          <motion.a
            href="https://wa.me/254117537025?text=Hey%20Peter!%20I%20just%20visited%20Hope%20Ntinyari's%20portfolio%20and%20loved%20your%20work.%20I'd%20like%20something%20similar%20for%20my%20brand."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 mr-2">
              <path d="M13.601 2.326A7.932 7.932 0 008.002 0a7.946 7.946 0 00-6.86 11.826L0 16l4.286-1.12A7.947 7.947 0 008.002 16a7.94 7.94 0 005.599-2.326 7.93 7.93 0 000-11.348zM8.002 14.58a6.54 6.54 0 01-3.333-.914l-.238-.14-2.544.666.681-2.48-.157-.254A6.553 6.553 0 018.002 1.42a6.557 6.557 0 014.65 11.202 6.532 6.532 0 01-4.65 1.958zm3.675-4.904c-.2-.1-1.18-.582-1.363-.647-.183-.066-.316-.1-.45.1-.133.2-.516.647-.633.78-.116.133-.233.15-.433.05-.2-.1-.846-.312-1.61-.996-.595-.532-.997-1.188-1.113-1.388-.116-.2-.012-.308.087-.408.09-.09.2-.233.3-.35.1-.117.133-.2.2-.333.066-.133.033-.25-.017-.35-.05-.1-.45-1.087-.616-1.487-.162-.388-.327-.335-.45-.34l-.383-.007c-.133 0-.35.05-.533.25-.183.2-.7.683-.7 1.665s.716 1.933.816 2.067c.1.133 1.4 2.133 3.4 2.993.475.205.845.327 1.133.418.475.15.908.128 1.25.078.383-.058 1.18-.48 1.346-.945.166-.467.166-.867.116-.946-.05-.08-.183-.133-.383-.233z"/>
            </svg>
            Contact Developer
          </motion.a>

          <motion.p 
            className="text-xs text-gray-600 mt-5 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} • Crafted with precision using React, Tailwind & Framer Motion
          </motion.p>

          {/* Tech decoration dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-30"></div>
    </footer>
  );
};

export default UpdatedFooter;


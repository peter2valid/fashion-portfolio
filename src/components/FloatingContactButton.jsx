import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingContactButton = () => {
  return (
    <motion.a
      href="https://wa.me/254792822887?text=Hi%20Hope,%20I'd%20like%20to%20book%20you%20for%20a%20shoot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-fashionRed text-white rounded-full shadow-2xl px-6 py-4 flex items-center gap-3 hover:bg-red-700 transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="text-2xl" />
      <span className="font-body font-semibold hidden sm:inline">Book Hope</span>
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
};

export default FloatingContactButton;


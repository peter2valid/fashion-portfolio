import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Starburst from './Starburst';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  // Define 3 categories with 6 images each
  const categories = [
    {
      id: 1,
      name: 'Runway & Editorial',
      description: 'Fashion shows and editorial shoots',
      color: 'from-fashionRed to-red-900',
      images: [1, 2, 3, 4, 5, 6].map(num => ({
        id: num,
        src: `/images/Gallery/${num}.jpg`,
        alt: `Hope Ntinyari Gallery ${num}`,
      })),
      coverImage: `/images/Gallery/1.jpg`,
    },
    {
      id: 2,
      name: 'Studio Sessions',
      description: 'Creative studio photography',
      color: 'from-black to-gray-800',
      images: [7, 8, 9, 10, 11, 12].map(num => ({
        id: num,
        src: `/images/Gallery/${num}.jpg`,
        alt: `Hope Ntinyari Gallery ${num}`,
      })),
      coverImage: `/images/Gallery/7.jpg`,
    },
    {
      id: 3,
      name: 'Style & Expression',
      description: 'Personal style and creative concepts',
      color: 'from-gray-700 to-black',
      images: [13, 14, 15, 16, 17, 18].map(num => ({
        id: num,
        src: `/images/Gallery/${num}.jpg`,
        alt: `Hope Ntinyari Gallery ${num}`,
      })),
      coverImage: `/images/Gallery/13.jpg`,
    },
  ];

  // Get all images for lightbox navigation
  const allImages = categories.flatMap(cat => cat.images);

  // Preload category cover images
  useEffect(() => {
    const totalCoverImages = categories.length;
    let loaded = 0;

    categories.forEach((category) => {
      const img = new Image();
      img.src = category.coverImage;
      img.onload = () => {
        loaded++;
        setLoadedImages(loaded);
        if (loaded === totalCoverImages) {
          setTimeout(() => setIsLoading(false), 300); // Smooth transition
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadedImages(loaded);
        if (loaded === totalCoverImages) {
          setTimeout(() => setIsLoading(false), 300);
        }
      };
    });
  }, []);

  const openCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const closeCategory = () => {
    setSelectedCategory(null);
  };

  const openLightbox = (image, categoryImages) => {
    const imageIndex = categoryImages.findIndex(img => img.id === image.id);
    setSelectedIndex(imageIndex);
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const category = categories.find(cat => cat.id === selectedCategory);
    const images = category ? category.images : allImages;
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    const category = categories.find(cat => cat.id === selectedCategory);
    const images = category ? category.images : allImages;
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-creamBg to-white" id="gallery">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Starburst />
            <h2 className="font-fashion text-5xl md:text-6xl lg:text-7xl text-fashionRed">
              Gallery
            </h2>
            <Starburst />
          </div>
          <motion.p
            className="font-body text-lg md:text-xl text-textBlack/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A visual journey through fashion and elegance
          </motion.p>
        </motion.div>

        {/* Loading Animation */}
        {isLoading ? (
          <motion.div
            className="flex flex-col items-center justify-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Elegant Loading Spinner */}
            <div className="relative w-24 h-24 mb-8">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-fashionRed/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner rotating ring */}
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-t-fashionRed border-r-transparent border-b-transparent border-l-transparent"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center starburst */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Starburst className="w-8 h-8 animate-pulse" />
              </div>
            </div>

            {/* Loading Text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-fashion text-2xl md:text-3xl text-fashionRed mb-2">
                Loading Gallery
              </h3>
              <p className="font-body text-textBlack/70 text-sm">
                Preparing your visual journey...
              </p>
              
              {/* Progress indicator */}
              <div className="mt-6 w-64 mx-auto">
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-fashionRed to-red-700"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(loadedImages / categories.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                <p className="font-body text-xs text-textBlack/50 mt-2">
                  {loadedImages} / {categories.length} images loaded
                </p>
              </div>
            </motion.div>

            {/* Decorative starbursts */}
            <div className="flex gap-3 mt-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              >
                <Starburst className="w-4 h-4" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                <Starburst className="w-4 h-4" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              >
                <Starburst className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* Category View or Image Grid */
          <AnimatePresence mode="wait">
            {selectedCategory === null ? (
            /* Category Cards */
            <motion.div
              key="categories"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="group relative overflow-hidden rounded-lg shadow-2xl cursor-pointer aspect-[3/4] bg-black"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(163, 33, 23, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => openCategory(category.id)}
                >
                  {/* Cover Image */}
                  <img
                    src={category.coverImage}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-80 transition-all duration-500`}></div>

                  {/* Category Info */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Starburst className="mx-auto mb-4" />
                      <h3 className="font-fashion text-3xl md:text-4xl text-white mb-3">
                        {category.name}
                      </h3>
                      <p className="font-body text-white/90 text-sm md:text-base mb-4">
                        {category.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-6 py-2 border-2 border-white rounded-full text-white font-body text-sm group-hover:bg-white group-hover:text-fashionRed transition-all duration-300">
                        <span>View Collection</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>

                  {/* Red Border on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-fashionRed transition-all duration-300 rounded-lg pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Image Grid for Selected Category */
            <motion.div
              key={`category-${selectedCategory}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              {/* Back Button */}
              <motion.button
                onClick={closeCategory}
                className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-fashionRed text-white font-body font-semibold rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Categories
              </motion.button>

              {/* Category Title */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-fashion text-4xl md:text-5xl text-fashionRed mb-2">
                  {categories.find(cat => cat.id === selectedCategory)?.name}
                </h3>
                <p className="font-body text-textBlack/70">
                  {categories.find(cat => cat.id === selectedCategory)?.description}
                </p>
              </motion.div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.find(cat => cat.id === selectedCategory)?.images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[3/4] bg-gray-100"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(163, 33, 23, 0.25)",
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => openLightbox(image, categories.find(cat => cat.id === selectedCategory).images)}
                  >
                    {/* Image */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-6">
                      <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="font-fashion text-white text-lg mb-2">
                          View Image
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-6 h-6 text-fashionRed" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* Red Glow Border on Hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-fashionRed transition-all duration-300 rounded-lg pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-fashionRed hover:scale-110 text-white flex items-center justify-center transition-all duration-300 shadow-xl"
              onClick={closeLightbox}
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Previous Button */}
            <motion.button
              className="absolute left-4 md:left-8 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-fashionRed hover:scale-110 text-white flex items-center justify-center transition-all duration-300 shadow-xl"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Next Button */}
            <motion.button
              className="absolute right-4 md:right-8 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-fashionRed hover:scale-110 text-white flex items-center justify-center transition-all duration-300 shadow-xl"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Image */}
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.7, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateY: 15 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter & Navigation Hint */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
              <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-white font-body text-lg font-semibold">
                  {selectedIndex + 1} / {selectedCategory ? categories.find(cat => cat.id === selectedCategory)?.images.length : allImages.length}
                </p>
              </div>
              <p className="text-white/60 text-sm mt-2 font-body">
                Use ← → arrow keys to navigate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;


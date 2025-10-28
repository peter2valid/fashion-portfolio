import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Starburst from './Starburst';

const VideoGallery = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  // Hope's actual videos from TikTok and Instagram
  const videos = [
    {
      id: 1,
      title: 'Fashion Moments',
      description: 'TikTok Reel',
      platform: 'tiktok',
      videoId: '7556589247361338636',
      videoUrl: 'https://www.tiktok.com/@ntinyarihope/video/7556589247361338636',
      thumbnailUrl: null, // TikTok uses gradient background
    },
    {
      id: 2,
      title: 'Style Showcase',
      description: 'Instagram Reel',
      platform: 'instagram',
      videoId: 'DPTi427COXk',
      videoUrl: 'https://www.instagram.com/reel/DPTi427COXk/',
      thumbnailUrl: null, // Instagram embed handles this
    },
    {
      id: 3,
      title: 'Creative Expression',
      description: 'TikTok Reel',
      platform: 'tiktok',
      videoId: '7556666170137480460',
      videoUrl: 'https://www.tiktok.com/@ntinyarihope/video/7556666170137480460',
      thumbnailUrl: null,
    },
  ];

  const getEmbedUrl = (video) => {
    if (video.platform === 'youtube') {
      return `https://www.youtube.com/embed/${video.videoId}?autoplay=1`;
    } else if (video.platform === 'tiktok') {
      return `https://www.tiktok.com/embed/v2/${video.videoId}`;
    } else if (video.platform === 'instagram') {
      return `https://www.instagram.com/reel/${video.videoId}/embed`;
    }
    return '';
  };

  const getAspectRatio = (platform) => {
    // Instagram and TikTok are vertical (9:16)
    if (platform === 'instagram' || platform === 'tiktok') {
      return '177.78%'; // 9:16 aspect ratio (16/9 * 100)
    }
    // YouTube is horizontal (16:9)
    return '56.25%'; // 16:9 aspect ratio
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-white" id="videos">
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
              Watch Hope in Action
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
            Behind the scenes and runway moments
          </motion.p>
        </motion.div>

        {/* Video Grid - Optimized for Vertical Videos */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group relative overflow-hidden rounded-lg shadow-xl bg-black w-full lg:w-1/3 max-w-sm"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(163, 33, 23, 0.4)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Video Player or Thumbnail */}
              {playingVideo === video.id ? (
                <div className="relative" style={{ paddingBottom: getAspectRatio(video.platform) }}>
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src={getEmbedUrl(video)}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    scrolling="no"
                  ></iframe>
                  
                  {/* Close Button */}
                  <motion.button
                    onClick={() => setPlayingVideo(null)}
                    className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-fashionRed text-white flex items-center justify-center transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              ) : (
                <div
                  className="relative cursor-pointer"
                  style={{ paddingBottom: getAspectRatio(video.platform) }}
                  onClick={() => setPlayingVideo(video.id)}
                >
                  {/* Gradient Background with Platform Icon */}
                  <div className={`absolute inset-0 ${
                    video.platform === 'instagram' 
                      ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400'
                      : 'bg-gradient-to-br from-black via-fashionRed to-black'
                  } flex items-center justify-center`}>
                    {video.platform === 'instagram' ? (
                      <svg className="w-32 h-32 text-white opacity-40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    ) : (
                      <svg className="w-32 h-32 text-white opacity-40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    )}
                  </div>

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-white/95 hover:bg-fashionRed flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <svg className="w-10 h-10 text-fashionRed group-hover:text-white ml-1 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                  </div>

                  {/* Border Glow on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-fashionRed transition-all duration-300 rounded-lg"></div>
                </div>
              )}

              {/* Video Info Card */}
              {playingVideo !== video.id && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="font-fashion text-xl md:text-2xl text-white mb-1">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      {video.platform === 'instagram' ? (
                        <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      )}
                      <p className="font-body text-white/70 text-sm">
                        {video.description}
                      </p>
                    </div>
                    <a 
                      href={video.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-fashionRed transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View on {video.platform === 'instagram' ? 'Instagram' : 'TikTok'}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="font-body text-textBlack/70 mb-6">
            Want to see more? Follow me on social media for daily updates
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://www.tiktok.com/@ntinyarihope"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-body font-semibold rounded-full hover:bg-fashionRed transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Follow on TikTok
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ntinyari.hope"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-body font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoGallery;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UpdatedNavbar from './components/UpdatedNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VisionSection from './components/VisionSection';
import MissionSection from './components/MissionSection';
import Projects from './components/Projects';
import VideoGallery from './components/VideoGallery';
import GallerySection from './components/GallerySection';
import ThankYouSection from './components/ThankYouSection';
import UpdatedFooter from './components/UpdatedFooter';
import FloatingContactButton from './components/FloatingContactButton';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

/**
 * Main App component with routing
 * BrowserRouter is in main.jsx, wrapped with ErrorBoundary
 * 
 * Routes:
 * - / : Full scrolling homepage with all sections
 * - /admin : Admin login page
 * - /dashboard : Admin dashboard (protected)
 */

// Home Page Component with all sections
const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <UpdatedNavbar />
      
      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Vision Section */}
      <div id="vision">
        <VisionSection />
      </div>

      {/* Mission Section */}
      <div id="mission">
        <MissionSection />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Gallery Section */}
      <GallerySection />

      {/* Thank You Section */}
      <div id="thank-you">
        <ThankYouSection />
      </div>

      {/* Footer */}
      <UpdatedFooter />

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Public Homepage */}
      <Route path="/" element={<HomePage />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;

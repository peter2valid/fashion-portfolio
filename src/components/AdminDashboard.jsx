import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { createProject, createVideo, uploadImage, createGalleryItem } from '../data/sanityData';
import ConfirmModal from './ConfirmModal';

// Simple Progress Bar Component
const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
    <div
      className="bg-fashionRed h-2.5 rounded-full transition-all duration-300"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, action: null, title: '', message: '' });

  // Check authentication
  useEffect(() => {
    if (!localStorage.getItem('hopeAdminAuth')) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    setConfirmModal({
      isOpen: true,
      title: 'Logout',
      message: 'Are you sure you want to logout?',
      action: () => {
        localStorage.removeItem('hopeAdminAuth');
        toast.success('Logged out successfully');
        navigate('/');
      },
    });
  };

  // Project Form State
  const [projectData, setProjectData] = useState({
    title: '',
    client: '',
    description: '',
    date: '',
    imageFile: null,
  });
  const [projectPreview, setProjectPreview] = useState(null);

  // Video Form State
  const [videoData, setVideoData] = useState({
    title: '',
    url: '',
  });

  // Gallery Form State
  const [galleryFile, setGalleryFile] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState(null);

  // Handle image preview
  const handleImagePreview = (file, setPreview) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview({
          url: reader.result,
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2), // Convert to MB
        });
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleProjectImageChange = (e) => {
    const file = e.target.files[0];
    setProjectData({ ...projectData, imageFile: file });
    handleImagePreview(file, setProjectPreview);
  };

  const handleGalleryFileChange = (e) => {
    const file = e.target.files[0];
    setGalleryFile(file);
    handleImagePreview(file, setGalleryPreview);
  };

  const removeProjectImage = () => {
    setProjectData({ ...projectData, imageFile: null });
    setProjectPreview(null);
  };

  const removeGalleryImage = () => {
    setGalleryFile(null);
    setGalleryPreview(null);
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUploadProgress(0);

    const progressToast = toast.loading('Uploading project...');

    try {
      let imageAsset = null;
      
      if (projectData.imageFile) {
        // Simulate progress for image upload
        const progressInterval = setInterval(() => {
          setUploadProgress((prev) => {
            if (prev >= 90) {
              clearInterval(progressInterval);
              return 90;
            }
            return prev + 10;
          });
        }, 200);

        imageAsset = await uploadImage(projectData.imageFile);
        clearInterval(progressInterval);
        setUploadProgress(100);
      }

      await createProject({
        title: projectData.title,
        client: projectData.client,
        description: projectData.description,
        date: projectData.date,
        image: imageAsset ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
        } : undefined,
      });

      toast.success('✅ Project created successfully!', { id: progressToast });
      setProjectData({ title: '', client: '', description: '', date: '', imageFile: null });
      setProjectPreview(null);
      setUploadProgress(0);
    } catch (error) {
      toast.error('❌ Failed to create project. Make sure Sanity is configured.', { id: progressToast });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading('Adding video...');

    try {
      await createVideo({
        title: videoData.title,
        url: videoData.url,
      });

      toast.success('✅ Video added successfully!', { id: loadingToast });
      setVideoData({ title: '', url: '' });
    } catch (error) {
      toast.error('❌ Failed to add video. Make sure Sanity is configured.', { id: loadingToast });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGallerySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUploadProgress(0);

    if (!galleryFile) {
      toast.error('Please select an image');
      setLoading(false);
      return;
    }

    const progressToast = toast.loading('Uploading photo...');

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      const imageAsset = await uploadImage(galleryFile);
      clearInterval(progressInterval);
      setUploadProgress(100);

      await createGalleryItem(imageAsset);

      toast.success('✅ Photo uploaded successfully!', { id: progressToast });
      setGalleryFile(null);
      setGalleryPreview(null);
      setUploadProgress(0);
    } catch (error) {
      toast.error('❌ Failed to upload photo. Make sure Sanity is configured.', { id: progressToast });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-creamBg">
      {/* Toast Container */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#000',
            fontFamily: 'Inter, system-ui, sans-serif',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      {/* Confirm Modal */}
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ ...confirmModal, isOpen: false })}
        onConfirm={confirmModal.action}
        title={confirmModal.title}
        message={confirmModal.message}
      />

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-signature text-2xl sm:text-3xl text-fashionRed">Hope Ntinyari</h1>
            <p className="font-body text-xs sm:text-sm text-black/60">Admin Dashboard</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="/"
              className="px-3 sm:px-4 py-2 font-body text-xs sm:text-sm text-black/70 hover:text-fashionRed transition-colors"
            >
              View Site
            </a>
            <button
              onClick={handleLogout}
              className="px-3 sm:px-4 py-2 bg-fashionRed text-white font-body text-xs sm:text-sm rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 mb-8 border-b border-black/10 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'project', label: 'Add Project' },
            { id: 'video', label: 'Add Video' },
            { id: 'gallery', label: 'Upload Photo' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3 font-body font-semibold transition-colors whitespace-nowrap text-sm sm:text-base ${
                activeTab === tab.id
                  ? 'text-fashionRed border-b-2 border-fashionRed'
                  : 'text-black/60 hover:text-fashionRed'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="font-fashion text-2xl sm:text-3xl text-fashionRed mb-6">Welcome back, Hope!</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="p-6 bg-creamBg rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-body font-semibold text-lg mb-2">Quick Actions</h3>
                  <p className="font-body text-sm text-black/60 mb-4">
                    Manage your portfolio content
                  </p>
                  <div className="space-y-2">
                    {['project', 'video', 'gallery'].map((tab, idx) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="w-full text-left px-4 py-2 bg-white rounded-md font-body text-sm hover:bg-fashionRed hover:text-white transition-colors"
                      >
                        → {tab === 'project' ? 'Add New Project' : tab === 'video' ? 'Add Video' : 'Upload Photo'}
                      </button>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="p-6 bg-creamBg rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-body font-semibold text-lg mb-2">Sanity Studio</h3>
                  <p className="font-body text-sm text-black/60 mb-4">
                    Edit content directly in Sanity
                  </p>
                  <a
                    href="https://hope-portfolio-cms.sanity.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-fashionRed text-white rounded-md font-body text-sm hover:bg-red-700 transition-colors"
                  >
                    Open Sanity Studio →
                  </a>
                </motion.div>

                <motion.div
                  className="p-6 bg-creamBg rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-body font-semibold text-lg mb-2">Site Links</h3>
                  <p className="font-body text-sm text-black/60 mb-4">
                    Your social media presence
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.instagram.com/ntinyari.hope"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 bg-white rounded-md font-body text-sm hover:bg-fashionRed hover:text-white transition-colors"
                    >
                      → Instagram
                    </a>
                    <a
                      href="https://www.tiktok.com/@ntinyarihope"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 bg-white rounded-md font-body text-sm hover:bg-fashionRed hover:text-white transition-colors"
                    >
                      → TikTok
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === 'project' && (
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="font-fashion text-2xl sm:text-3xl text-fashionRed mb-6">Add New Project</h2>
              <form onSubmit={handleProjectSubmit} className="space-y-6">
                <div>
                  <label className="block font-body font-semibold text-sm mb-2">Project Title *</label>
                  <input
                    type="text"
                    value={projectData.title}
                    onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fashionRed font-body"
                    required
                  />
                </div>

                <div>
                  <label className="block font-body font-semibold text-sm mb-2">Client Name</label>
                  <input
                    type="text"
                    value={projectData.client}
                    onChange={(e) => setProjectData({ ...projectData, client: e.target.value })}
                    className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fashionRed font-body"
                  />
                </div>

                <div>
                  <label className="block font-body font-semibold text-sm mb-2">Description</label>
                  <textarea
                    value={projectData.description}
                    onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                    className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fashionRed font-body"
                    rows="4"
                  ></textarea>
                </div>

                <div>
                  <label className="block font-body font-semibold text-sm mb-2">Date</label>
                  <input
                    type="date"
                    value={projectData.date}
                    onChange={(e) => setProjectData({ ...projectData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fashionRed font-body"
                  />
                </div>

                <div>
                  <label className="block font-body font-semibold text-sm mb-2">Project Image</label>
                  {!projectPreview ? (
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProjectImageChange}
                        className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fashionRed font-body"
                      />
                    </div>
                  ) : (
                    <motion.div
                      className="border border-black/20 rounded-md p-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex gap-4">
                        <img
                          src={projectPreview.url}
                          alt="Preview"
                          className="w-32 h-32 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <p className="font-body font-semibold text-sm mb-1">{projectPreview.name}</p>
                          <p className="font-body text-xs text-black/60 mb-3">{projectPreview.size} MB</p>
                          <button
                            type="button"
                            onClick={removeProjectImage}
                            className="px-3 py-1 bg-red-100 text-red-600 font-body text-xs rounded-md hover:bg-red-200 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {loading && uploadProgress > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <ProgressBar progress={uploadProgress} />
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-fashionRed text-white font-body font-semibold py-3 px-6 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating...' : 'Create Project'}
                </button>
              </form>
            </div>
          )}

          {activeTab === 'video' && (
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="font-fashion text-2xl sm:text-3xl text-fashionRed mb-6">Add Runway Video</h2>
              <form onSubmit={handleVideoSubmit} className="space-y-6">
                <div>
                  <label className="block font-body font-semibold text-sm mb-2">Video Title *</label>
                  <input
                    type="text"
                    value={videoData.title}
                    onChange={(e) => setVideoData({ ...videoData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fashionRed font-body"
                    required
                  />
                </div>

                <div>
                  <label className="block font-body font-semibold text-sm mb-2">Video URL (YouTube or TikTok) *</label>
                  <input
                    type="url"
                    value={videoData.url}
                    onChange={(e) => setVideoData({ ...videoData, url: e.target.value })}
                    className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fashionRed font-body"
                    placeholder="https://www.youtube.com/watch?v=... or https://www.tiktok.com/@username/video/..."
                    required
                  />
                  <p className="mt-2 text-xs font-body text-black/60">
                    💡 Paste a YouTube or TikTok video URL
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-fashionRed text-white font-body font-semibold py-3 px-6 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Adding...' : 'Add Video'}
                </button>
              </form>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="font-fashion text-2xl sm:text-3xl text-fashionRed mb-6">Upload Gallery Photo</h2>
              <form onSubmit={handleGallerySubmit} className="space-y-6">
                <div>
                  <label className="block font-body font-semibold text-sm mb-2">Select Image *</label>
                  {!galleryPreview ? (
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleGalleryFileChange}
                        className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fashionRed font-body"
                        required
                      />
                    </div>
                  ) : (
                    <motion.div
                      className="border border-black/20 rounded-md p-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <img
                          src={galleryPreview.url}
                          alt="Preview"
                          className="w-full sm:w-48 h-48 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <p className="font-body font-semibold text-sm mb-1">{galleryPreview.name}</p>
                          <p className="font-body text-xs text-black/60 mb-3">{galleryPreview.size} MB</p>
                          <button
                            type="button"
                            onClick={removeGalleryImage}
                            className="px-3 py-1 bg-red-100 text-red-600 font-body text-xs rounded-md hover:bg-red-200 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {loading && uploadProgress > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <ProgressBar progress={uploadProgress} />
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-fashionRed text-white font-body font-semibold py-3 px-6 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Uploading...' : 'Upload Photo'}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;

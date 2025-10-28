import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { setAdmin } from '../utils/isAdmin';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Simple authentication (In production, use proper backend authentication)
  const ADMIN_CREDENTIALS = {
    username: import.meta.env.VITE_ADMIN_USER || 'hope',
    password: import.meta.env.VITE_ADMIN_PASS || 'hope2025',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (
        username === ADMIN_CREDENTIALS.username &&
        password === ADMIN_CREDENTIALS.password
      ) {
        // Set auth using utility
        setAdmin(true);
        navigate('/dashboard');
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-creamBg px-6 py-24">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className="font-signature text-5xl text-fashionRed mb-2">
              Hope Ntinyari
            </h1>
            <h2 className="font-fashion text-2xl text-black/80">
              Admin Portal
            </h2>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-sm font-body">{error}</p>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-body font-semibold text-black/80 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fashionRed focus:border-transparent font-body"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-body font-semibold text-black/80 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fashionRed focus:border-transparent font-body"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-fashionRed text-white font-body font-semibold py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm font-body text-black/60 hover:text-fashionRed transition-colors duration-300"
            >
              ← Back to Portfolio
            </a>
          </div>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-creamBg rounded-md">
            <p className="text-xs font-body text-black/60 text-center">
              Demo Credentials: hope / hope2025
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;


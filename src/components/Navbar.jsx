// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { getTheme, setTheme, getFavorites } from '../utils/helpers';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(getTheme() === 'dark');
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTheme(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const updateFavoritesCount = () => {
      setFavoritesCount(getFavorites().length);
    };
    
    updateFavoritesCount();
    window.addEventListener('favoritesUpdated', updateFavoritesCount); 
    
    return () => {
      window.removeEventListener('favoritesUpdated', updateFavoritesCount);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            PropertyHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className={`font-medium transition-colors duration-200 flex items-center space-x-1 ${
                isActive('/favorites') 
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              <FiHeart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-current' : ''}`} />
              <span>Favorites</span>
              {favoritesCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {favoritesCount}
                </span>
              )}
            </Link>
            {/* Dark Mode Toggle - Desktop */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <FiSun className="w-6 h-6 text-yellow-500" /> : <FiMoon className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Button & Toggle (Combined) */}
          <div className="flex items-center lg:hidden">
            {/* Mobile Dark Mode Toggle (inline with menu button) */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300 mr-2"
            >
              {darkMode ? <FiSun className="w-6 h-6 text-yellow-500" /> : <FiMoon className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 inset-x-0 glass-effect border-b border-gray-200 dark:border-gray-700 shadow-xl py-4 animate-fade-in">
          <div className="px-4 sm:px-6 space-y-2 pb-2">
            
            {/* Home Link */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-semibold py-3 px-4 rounded-lg transition-colors duration-200 ${// 💡 Increased padding for better tap target
                isActive('/') 
                  ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Home
            </Link>

            {/* Favorites Link */}
            <Link
              to="/favorites"
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-semibold py-3 px-4 rounded-lg flex items-center justify-between transition-colors duration-200 ${ // 💡 Increased padding for better tap target
                isActive('/favorites') 
                  ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <span className="flex items-center space-x-2">
                <FiHeart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-current text-red-500' : ''}`} />
                <span>Favorites</span>
              </span>
              {favoritesCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {favoritesCount}
                </span>
              )}
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
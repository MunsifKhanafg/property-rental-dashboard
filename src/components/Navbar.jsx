import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiHeart, FiGrid, FiList, FiMenu, FiX } from 'react-icons/fi';
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
  }, [location]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">PR</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              PropertyRental
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className={`font-medium transition-colors duration-300 flex items-center space-x-2 ${
                isActive('/favorites') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <FiHeart className={favoritesCount > 0 ? 'fill-current' : ''} />
              <span>Favorites</span>
              {favoritesCount > 0 && (
                <span className="bg-primary-600 text-white text-xs rounded-full px-2 py-0.5 animate-scale-in">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <FiSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 animate-slide-up">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-medium py-2 ${
                isActive('/') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-medium py-2 flex items-center space-x-2 ${
                isActive('/favorites') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <FiHeart className={favoritesCount > 0 ? 'fill-current' : ''} />
              <span>Favorites</span>
              {favoritesCount > 0 && (
                <span className="bg-primary-600 text-white text-xs rounded-full px-2 py-0.5">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 font-medium py-2 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? (
                <>
                  <FiSun className="w-5 h-5 text-yellow-500" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="w-5 h-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

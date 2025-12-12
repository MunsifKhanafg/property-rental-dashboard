// src/pages/FavoritesPage.jsx

import React, { useState, useEffect } from 'react';
import { FiHeart, FiTrash2, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import PropertyDetails from '../components/PropertyDetails';
import { getFavorites, formatPrice } from '../utils/helpers';
// 💡 FIX: Import data directly
import propertiesData from '../data/properties'; 

const FavoritesPage = () => {
  const [favoriteProperties, setFavoriteProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const fetchProperties = () => {
    setLoading(true);
    const favoriteIds = getFavorites();
    // 💡 Filter properties directly from imported data
    const favorites = propertiesData.filter(p => favoriteIds.includes(p.id)); 
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        setFavoriteProperties(favorites);
        setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchProperties();
    
    // Listen for favorites updates from helpers.js (CRUCIAL FIX)
    const handleFavoritesUpdate = () => {
      fetchProperties();
    };
    
    window.addEventListener('favoritesUpdated', handleFavoritesUpdate);
    
    return () => {
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
    };
  }, []);

  const handleOpenDetails = (property) => {
    setSelectedProperty(property);
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to remove all favorite properties?")) {
      localStorage.setItem('favorites', '[]'); // Clear all using your key
      window.dispatchEvent(new Event('favoritesUpdated')); // Trigger update
    }
  };

  // Calculate stats
  const totalProperties = favoriteProperties.length;
  const avgPrice = totalProperties > 0 
    ? favoriteProperties.reduce((sum, p) => sum + p.price, 0) / totalProperties
    : 0;
  const avgRating = totalProperties > 0 
    ? favoriteProperties.reduce((sum, p) => sum + (p.rating || 0), 0) / totalProperties
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white border-b pb-2">
        Your Favorite Properties ({totalProperties})
      </h1>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => <div key={i} className="card h-96 animate-pulse"></div>)}
        </div>
      ) : totalProperties > 0 ? (
        <>
          {/* Stats and Clear All */}
          <div className="flex justify-between items-center mb-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto">
              {/* Avg Price Stat */}
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  {formatPrice(avgPrice)}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Avg Price</div>
              </div>
              {/* Avg Rating Stat */}
              <div className="card p-4 text-center">
                <div className="flex items-center justify-center text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                  <FiStar className="w-5 h-5 mr-1 fill-current" />
                  {avgRating.toFixed(1)}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Avg Rating</div>
              </div>
              {/* Cities Stat */}
              <div className="card p-4 text-center hidden md:block">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {new Set(favoriteProperties.map(p => p.location.city)).size}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Cities</div>
              </div>
            </div>

            <button
              onClick={handleClearAll}
              className="btn-secondary flex items-center space-x-2 text-red-600 hover:text-red-700 mt-4 md:mt-0"
            >
              <FiTrash2 />
              <span>Clear All</span>
            </button>
          </div>

          {/* Property List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {favoriteProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={() => handleOpenDetails(property)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mb-6">
            <FiHeart className="w-16 h-16 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-3xl font-bold mb-4">No Favorites Yet</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Start exploring properties and add your favorites to create your personal collection
          </p>
          <Link to="/" className="btn-primary inline-flex items-center space-x-2">
            <span>Browse Properties</span>
          </Link>
        </div>
      )}

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};

export default FavoritesPage;
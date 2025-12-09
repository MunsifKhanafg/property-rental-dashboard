import React, { useState, useEffect } from 'react';
import { FiHeart, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import PropertyDetails from '../components/PropertyDetails';
import { getFavorites, removeFromFavorites } from '../utils/helpers';

const FavoritesPage = () => {
  const [properties, setProperties] = useState([]);
  const [favoriteProperties, setFavoriteProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    fetchProperties();
    
    // Listen for favorites updates
    const handleFavoritesUpdate = () => {
      fetchProperties();
    };
    
    window.addEventListener('favoritesUpdated', handleFavoritesUpdate);
    
    return () => {
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
    };
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch('/properties.json');
      const data = await response.json();
      
      const favoriteIds = getFavorites();
      const favorites = data.filter(p => favoriteIds.includes(p.id));
      
      setTimeout(() => {
        setProperties(data);
        setFavoriteProperties(favorites);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to remove all favorites?')) {
      favoriteProperties.forEach(property => {
        removeFromFavorites(property.id);
      });
      setFavoriteProperties([]);
      window.dispatchEvent(new Event('favoritesUpdated'));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full mb-4">
              <FiHeart className="w-10 h-10 fill-current" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Favorite Properties
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Keep track of properties you love and compare them easily
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your favorites...</p>
          </div>
        ) : favoriteProperties.length > 0 ? (
          <>
            {/* Header Actions */}
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <h2 className="text-2xl font-bold">
                {favoriteProperties.length} Favorite {favoriteProperties.length === 1 ? 'Property' : 'Properties'}
              </h2>
              <button
                onClick={handleClearAll}
                className="flex items-center space-x-2 px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors duration-300"
              >
                <FiTrash2 />
                <span>Clear All</span>
              </button>
            </div>

            {/* Favorites Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onClick={setSelectedProperty}
                  viewMode="grid"
                />
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  ${Math.round(favoriteProperties.reduce((sum, p) => sum + p.price, 0) / favoriteProperties.length).toLocaleString()}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Average Price</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {(favoriteProperties.reduce((sum, p) => sum + p.rating, 0) / favoriteProperties.length).toFixed(1)}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {new Set(favoriteProperties.map(p => p.city)).size}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Cities</div>
              </div>
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
      </div>

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

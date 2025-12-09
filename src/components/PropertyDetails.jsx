import React, { useState, useEffect } from 'react';
import { FiX, FiHeart, FiMapPin, FiMaximize, FiBed, FiBriefcase, FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { formatPrice, addToFavorites, removeFromFavorites, isFavorite } from '../utils/helpers';

const PropertyDetails = ({ property, onClose }) => {
  const [favorite, setFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setFavorite(isFavorite(property.id));
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [property.id]);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property.id);
    }
    setFavorite(!favorite);
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const openInMaps = () => {
    const url = `https://www.google.com/maps?q=${property.gps.lat},${property.gps.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{property.title}</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleFavoriteClick}
              className={`p-2 rounded-full transition-all duration-300 ${
                favorite
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <FiHeart className={favorite ? 'fill-current' : ''} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative h-96 bg-gray-100 dark:bg-gray-900">
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          
          {/* Featured Badge */}
          {property.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⭐ Featured Property
            </div>
          )}

          {/* Navigation Buttons */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Price and Rating */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {formatPrice(property.price)}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-lg">/month</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-lg">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">{property.rating}</span>
                  <span className="text-gray-500 text-sm">({property.reviews} reviews)</span>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium">
                  Available Now
                </span>
              </div>
            </div>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
              <FiBed className="w-8 h-8 mx-auto mb-2 text-primary-600" />
              <div className="text-2xl font-bold">{property.bedrooms}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bedrooms</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
              <FiBriefcase className="w-8 h-8 mx-auto mb-2 text-primary-600" />
              <div className="text-2xl font-bold">{property.bathrooms}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bathrooms</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
              <FiMaximize className="w-8 h-8 mx-auto mb-2 text-primary-600" />
              <div className="text-2xl font-bold">{property.area}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Sq Ft</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center">
              <FiMapPin className="w-8 h-8 mx-auto mb-2 text-primary-600" />
              <div className="text-lg font-bold">{property.city}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{property.type}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-bold mb-3">Description</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-bold mb-3">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3"
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-sm font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-bold mb-3">Location</h3>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <FiMapPin className="text-primary-600" />
                    <span className="font-medium">{property.gps.address}</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    GPS: {property.gps.lat.toFixed(4)}, {property.gps.lng.toFixed(4)}
                  </div>
                </div>
                <button
                  onClick={openInMaps}
                  className="btn-primary flex items-center space-x-2"
                >
                  <FiExternalLink />
                  <span>View on Map</span>
                </button>
              </div>
              
              {/* Static Map Placeholder */}
              <div className="mt-4 h-48 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l-home+0ea5e9(${property.gps.lng},${property.gps.lat})/${property.gps.lng},${property.gps.lat},13,0/600x300@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`}
                  alt="Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <button className="w-full btn-primary py-4 text-lg font-semibold">
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

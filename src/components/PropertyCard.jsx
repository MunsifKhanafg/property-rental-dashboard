import React, { useState, useEffect } from 'react';
import { FiHeart, FiMapPin, FiMaximize, FiBed, FiBriefcase } from 'react-icons/fi';
import { formatPrice, addToFavorites, removeFromFavorites, isFavorite } from '../utils/helpers';

const PropertyCard = ({ property, onClick, viewMode = 'grid' }) => {
  const [favorite, setFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(property.id));
  }, [property.id]);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (favorite) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property.id);
    }
    setFavorite(!favorite);
    
    // Dispatch custom event to update navbar
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  const isGridView = viewMode === 'grid';

  return (
    <div
      onClick={() => onClick(property)}
      className={`card cursor-pointer group animate-fade-in ${
        isGridView ? '' : 'flex flex-row'
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${isGridView ? 'h-64' : 'w-64 h-full'}`}>
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton" />
        )}
        <img
          src={property.image}
          alt={property.title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 ${
            favorite
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-gray-700 hover:bg-white'
          }`}
        >
          <FiHeart className={favorite ? 'fill-current' : ''} />
        </button>

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            ⭐ Featured
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center space-x-1 shadow-lg">
          <span className="text-yellow-500">⭐</span>
          <span className="font-semibold text-sm">{property.rating}</span>
          <span className="text-gray-500 text-xs">({property.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 flex-1 ${isGridView ? '' : 'flex flex-col justify-between'}`}>
        <div>
          {/* Title and Price */}
          <div className="mb-3">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-1">
              {property.title}
            </h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {formatPrice(property.price)}
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>

          {/* Location */}
          <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-4">
            <FiMapPin className="text-primary-600" />
            <span className="text-sm font-medium">{property.city}</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm">{property.type}</span>
          </div>

          {/* Property Details */}
          <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center space-x-2">
              <FiBed className="text-primary-600" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiBriefcase className="text-primary-600" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMaximize className="text-primary-600" />
              <span>{property.area} sqft</span>
            </div>
          </div>

          {/* Amenities Preview */}
          <div className="flex flex-wrap gap-2">
            {property.amenities.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="text-xs px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* View Details Button (only in list view) */}
        {!isGridView && (
          <button className="mt-4 btn-primary w-full">
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;

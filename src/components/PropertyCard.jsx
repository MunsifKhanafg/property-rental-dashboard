// src/components/PropertyCard.jsx

import React, { useState, useEffect } from 'react';
import { FiHeart, FiMapPin, FiMaximize, FiBriefcase, FiStar } from 'react-icons/fi';
import { FaBed } from 'react-icons/fa'; // Ensure you have react-icons/fa installed
import { formatPrice, addToFavorites, removeFromFavorites, isFavorite } from '../utils/helpers';

// Added viewMode and onClick prop
const PropertyCard = ({ property, viewMode = 'grid', onClick }) => { 
    const [isFav, setIsFav] = useState(false);
    const isGridView = viewMode === 'grid';

    // Listens for 'favoritesUpdated' event from helpers.js
    useEffect(() => {
        const updateFav = () => setIsFav(isFavorite(property.id));
        updateFav();
        window.addEventListener('favoritesUpdated', updateFav);
        return () => window.removeEventListener('favoritesUpdated', updateFav);
    }, [property.id]);


    const handleFavoriteToggle = (e) => {
        // Stop event propagation so it doesn't trigger the card's onClick
        e.stopPropagation(); 
        if (isFav) {
            removeFromFavorites(property.id);
        } else {
            addToFavorites(property.id);
        }
        // Note: The UI state is now updated via the 'favoritesUpdated' event listener,
        // which makes it more reliable across all components.
    };

    return (
        // 💡 Attach onClick to the main card container
        <div 
            onClick={onClick} 
            className={`card cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 ${isGridView ? 'flex flex-col' : 'flex flex-col sm:flex-row'}`}
        >
            <div className={`relative ${isGridView ? 'w-full h-48' : 'sm:w-1/3 w-full h-48 sm:h-auto'}`}>
                <img 
                    src={property.images[0]} 
                    alt={property.title} 
                    className={`w-full h-full object-cover ${isGridView ? 'rounded-t-xl' : 'rounded-t-xl sm:rounded-t-none sm:rounded-l-xl'}`}
                />
                <button
                    onClick={handleFavoriteToggle}
                    className={`absolute top-3 right-3 p-3 rounded-full bg-white dark:bg-gray-900 shadow-md transition-colors duration-200 ${
                        isFav ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                    }`}
                >
                    <FiHeart className={`w-5 h-5 ${isFav ? 'fill-current' : ''}`} />
                </button>
            </div>
            
            <div className={isGridView ? 'p-6 flex flex-col' : 'sm:w-2/3 p-6 flex flex-col justify-between'}>
                {/* Rating Badge */}
                <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full dark:bg-green-900/50 dark:text-green-400">
                        {property.type}
                    </span>
                    {property.rating && (
                        <span className="flex items-center text-sm font-medium text-yellow-600 dark:text-yellow-400">
                            <FiStar className="w-4 h-4 mr-1 fill-current" />
                            {property.rating}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold mb-1 line-clamp-2">{property.title}</h3>
                
                <p className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <FiMapPin className="w-4 h-4 mr-1" /> 
                    {property.location.city}, {property.location.state}
                </p>
                
                <div className="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-4 text-sm border-t border-b border-gray-100 dark:border-gray-700 py-3">
                    <div className="flex items-center">
                        <FaBed className="w-4 h-4 mr-1 text-indigo-500" />
                        <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center">
                        <FiBriefcase className="w-4 h-4 mr-1 text-indigo-500" />
                        <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center">
                        <FiMaximize className="w-4 h-4 mr-1 text-indigo-500" />
                        <span>{property.area} sqft</span>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                    <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                        {formatPrice(property.price)}<span className="text-lg text-gray-500 font-normal dark:text-gray-400">/month</span>
                    </div>
                    {/* The View Details button clicks the whole card */}
                    <button className="btn-secondary text-sm px-3 py-1.5" onClick={onClick}> 
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
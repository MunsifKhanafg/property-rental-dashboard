// src/components/PropertyCard.jsx

import React, { useState, useEffect } from 'react';
// ORIGINAL: import { FiHeart, FiMapPin, FiMaximize, FiBed, FiBriefcase } from 'react-icons/fi';
// CORRECTED: Remove FiBed from react-icons/fi, and import FaBed from react-icons/fa
import { FiHeart, FiMapPin, FiMaximize, FiBriefcase } from 'react-icons/fi';
import { FaBed } from 'react-icons/fa'; // Import FaBed from Font Awesome

import { formatPrice, addToFavorites, removeFromFavorites, isFavorite } from '../utils/helpers';

const PropertyCard = ({ property }) => {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        setIsFav(isFavorite(property.id));
    }, [property.id]);

    const handleFavoriteToggle = () => {
        if (isFav) {
            removeFromFavorites(property.id);
        } else {
            addToFavorites(property.id);
        }
        setIsFav(!isFav); // Toggle the state immediately
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover" />
            <button
                onClick={handleFavoriteToggle}
                className={`absolute top-3 right-3 p-2 rounded-full bg-white transition-colors duration-200 ${
                    isFav ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                }`}
            >
                <FiHeart className="w-6 h-6" />
            </button>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{property.title}</h3>
                <p className="text-gray-600 flex items-center mb-3">
                    <FiMapPin className="w-4 h-4 mr-1 text-gray-500" /> {property.location}
                </p>
                <div className="flex items-center justify-between text-gray-700 mb-4">
                    <div className="flex items-center">
                        <FiMaximize className="w-5 h-5 mr-1 text-gray-500" />
                        <span>{property.area} sqft</span>
                    </div>
                    <div className="flex items-center">
                        {/* ORIGINAL: <FiBed className="w-5 h-5 mr-1 text-gray-500" /> */}
                        <FaBed className="w-5 h-5 mr-1 text-gray-500" /> {/* CHANGED HERE */}
                        <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center">
                        <FiBriefcase className="w-5 h-5 mr-1 text-gray-500" />
                        <span>{property.baths} Baths</span>
                    </div>
                </div>
                <div className="text-2xl font-bold text-indigo-600 mb-4">
                    {formatPrice(property.price)}<span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;
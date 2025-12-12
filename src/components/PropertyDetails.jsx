// src/components/PropertyDetails.jsx

import React, { useState, useEffect } from 'react';
import { FiX, FiMapPin, FiMaximize, FiBriefcase, FiHeart, FiStar } from 'react-icons/fi';
import { FaBed } from 'react-icons/fa';
import { formatPrice, addToFavorites, removeFromFavorites, isFavorite } from '../utils/helpers';

const PropertyDetails = ({ property, onClose }) => {
    const [isFav, setIsFav] = useState(false);
    const [mainImage, setMainImage] = useState(property.images[0]);

    useEffect(() => {
        setIsFav(isFavorite(property.id));
        // Add keyboard listener for 'Escape' key to close modal
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [property.id, onClose]);

    const handleFavoriteToggle = () => {
        if (isFav) {
            removeFromFavorites(property.id);
        } else {
            addToFavorites(property.id);
        }
        setIsFav(!isFav);
    };

    if (!property) return null;

    return (
        // Modal Overlay
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center animate-fade-in" onClick={onClose}>
            {/* Modal Content */}
            <div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform scale-100 animate-slide-up-content transition-all duration-300"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 z-10 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>

                {/* Main Image and Gallery */}
                <div className="relative">
                    <img
                        src={mainImage}
                        alt={property.title}
                        className="w-full h-[400px] object-cover rounded-t-xl"
                    />
                     <button
                        onClick={handleFavoriteToggle}
                        className={`absolute top-4 right-16 p-3 z-10 bg-white dark:bg-gray-900 rounded-full shadow-lg transition-colors duration-200 ${
                            isFav ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                        }`}
                    >
                        <FiHeart className={`w-6 h-6 ${isFav ? 'fill-current' : ''}`} />
                    </button>
                    
                    {/* Thumbnail Gallery */}
                    <div className="flex space-x-2 p-4 overflow-x-auto bg-white dark:bg-gray-800">
                        {property.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all ${
                                    img === mainImage ? 'ring-2 ring-indigo-500 border-2 border-white' : 'opacity-70 hover:opacity-100'
                                }`}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Details Content */}
                <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">{property.title}</h2>
                        <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                            {formatPrice(property.price)}<span className="text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                    </div>

                    <p className="flex items-center text-gray-600 dark:text-gray-400 text-lg mb-6">
                        <FiMapPin className="w-5 h-5 mr-2" /> 
                        {property.location.city}, {property.location.state}
                    </p>

                    {/* Key Details Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <DetailItem icon={<FaBed />} label="Beds" value={property.beds} />
                        <DetailItem icon={<FiBriefcase />} label="Baths" value={property.baths} />
                        <DetailItem icon={<FiMaximize />} label="Area" value={`${property.area} sqft`} />
                    </div>

                    {/* Description */}
                    <h3 className="text-xl font-semibold mb-3 border-b pb-2 border-gray-200 dark:border-gray-600">Description</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {property.description || "No detailed description provided for this property."}
                    </p>
                    
                    {/* Rating/Type */}
                    <div className="flex items-center space-x-6 mb-6">
                        <span className="bg-indigo-100 text-indigo-700 text-base font-semibold px-4 py-2 rounded-full dark:bg-indigo-900/50 dark:text-indigo-400">
                            {property.type}
                        </span>
                        {property.rating && (
                            <span className="flex items-center text-lg font-bold text-yellow-600 dark:text-yellow-400">
                                <FiStar className="w-5 h-5 mr-2 fill-current" />
                                {property.rating} / 5.0
                            </span>
                        )}
                    </div>


                    {/* Action Button */}
                    <button className="btn-primary w-full text-lg mt-4">
                        Contact Agent
                    </button>
                </div>
            </div>
        </div>
    );
};

// Helper component for detail items
const DetailItem = ({ icon, label, value }) => (
    <div className="text-center">
        <div className="text-indigo-500 dark:text-indigo-400 mb-1 mx-auto w-6 h-6">{icon}</div>
        <div className="text-xl font-bold text-gray-900 dark:text-white">{value}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
    </div>
);

export default PropertyDetails;
import React, { useState } from 'react';
import { FiSliders, FiDollarSign, FiMapPin, FiHome, FiX } from 'react-icons/fi';

const FiltersBar = ({ onFilterChange, filters }) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const cities = ['All', 'New York', 'Miami', 'San Francisco', 'Los Angeles', 'Chicago', 'Aspen', 'Boston', 'Seattle', 'Honolulu', 'Austin', 'Scottsdale', 'Charleston'];
  const types = ['All', 'Apartment', 'Villa', 'House', 'Loft'];

  const handlePriceChange = (e) => {
    onFilterChange({ ...filters, maxPrice: parseInt(e.target.value) });
  };

  const handleCityChange = (city) => {
    onFilterChange({ ...filters, city });
  };

  const handleTypeChange = (type) => {
    onFilterChange({ ...filters, type });
  };

  const handleRatingChange = (e) => {
    onFilterChange({ ...filters, minRating: parseFloat(e.target.value) });
  };

  const resetFilters = () => {
    onFilterChange({
      city: 'All',
      type: 'All',
      maxPrice: 30000,
      minRating: 0,
    });
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
          <FiDollarSign />
          <span>Max Price: ${filters.maxPrice.toLocaleString()}/month</span>
        </label>
        <input
          type="range"
          min="1000"
          max="30000"
          step="500"
          value={filters.maxPrice}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>$1,000</span>
          <span>$30,000</span>
        </div>
      </div>

      {/* City Filter */}
      <div>
        <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
          <FiMapPin />
          <span>City</span>
        </label>
        <select
          value={filters.city}
          onChange={(e) => handleCityChange(e.target.value)}
          className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Property Type */}
      <div>
        <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
          <FiHome />
          <span>Property Type</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                filters.type === type
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
          <span>⭐</span>
          <span>Minimum Rating: {filters.minRating > 0 ? filters.minRating.toFixed(1) : 'Any'}</span>
        </label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={filters.minRating}
          onChange={handleRatingChange}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>Any</span>
          <span>5.0</span>
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={resetFilters}
        className="w-full btn-secondary flex items-center justify-center space-x-2"
      >
        <FiX />
        <span>Reset Filters</span>
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block card p-6 sticky top-24">
        <div className="flex items-center space-x-2 mb-6">
          <FiSliders className="text-primary-600 text-xl" />
          <h2 className="text-xl font-bold">Filters</h2>
        </div>
        <FiltersContent />
      </div>

      {/* Mobile Filters Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="bg-primary-600 text-white p-4 rounded-full shadow-2xl hover:bg-primary-700 transition-all duration-300 hover:scale-110"
        >
          <FiSliders className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <FiSliders className="text-primary-600 text-xl" />
                <h2 className="text-xl font-bold">Filters</h2>
              </div>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <FiltersContent />
          </div>
        </div>
      )}
    </>
  );
};

export default FiltersBar;

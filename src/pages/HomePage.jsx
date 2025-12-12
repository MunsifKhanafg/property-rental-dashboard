// src/pages/HomePage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch, FiGrid, FiList } from 'react-icons/fi';
import propertiesData from '../data/properties'; 
import PropertyCard from '../components/PropertyCard';
import PropertyDetails from '../components/PropertyDetails';
import FiltersBar from '../components/FiltersBar';
import { getViewMode, setViewMode as saveViewMode } from '../utils/helpers';

const HomePage = () => {
  // CRUCIAL FIX: Initialize filteredProperties directly with the full data immediately.
  const [properties] = useState(propertiesData); 
  const [filteredProperties, setFilteredProperties] = useState(propertiesData); 
  
  const [selectedProperty, setSelectedProperty] = useState(null); 
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewModeState] = useState(getViewMode());
  const [filters, setFilters] = useState({
    city: 'All',
    type: 'All',
    maxPrice: 30000,
    minRating: 0,
  });

  // Function to apply all filters and search (using useCallback for stability)
  const applyFilters = useCallback(() => {
    let result = properties;

    // 1. Apply Search Query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.location.city.toLowerCase().includes(query) ||
          p.location.state.toLowerCase().includes(query)
      );
    }

    // 2. Apply Filters
    result = result.filter((p) => {
      const cityMatch = filters.city === 'All' || p.location.city === filters.city;
      const typeMatch = filters.type === 'All' || p.type === filters.type; 
      const priceMatch = p.price <= filters.maxPrice;
      const ratingMatch = (p.rating || 0) >= filters.minRating;

      return cityMatch && typeMatch && priceMatch && ratingMatch;
    });

    setFilteredProperties(result);
  }, [properties, filters, searchQuery]);

  // Run filters ONLY when the search or filters state changes.
  useEffect(() => {
    applyFilters(); 
  }, [filters, searchQuery, applyFilters]);

  const setViewMode = (mode) => {
    setViewModeState(mode);
    saveViewMode(mode);
  };
  
  const handleOpenDetails = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Input */}
      <div className="mb-6">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by title, city, or state..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300"
          />
        </div>
      </div>

      {/* Main Content: FilterBar (Left/Top) and Property List (Right) */}
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        
        {/* 1. Filter Bar */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 mb-6 lg:mb-0"> 
            <FiltersBar onFilterChange={setFilters} filters={filters} />
          </div>
        </div>

        {/* 2. Property List */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              {`${filteredProperties.length} Properties Found`}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                <FiGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                <FiList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Property Cards */}
          {filteredProperties.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-6'}>
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onClick={() => handleOpenDetails(property)} 
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-2">No Properties Found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setFilters({ city: 'All', type: 'All', maxPrice: 30000, minRating: 0 });
                  setSearchQuery('');
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
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

export default HomePage;
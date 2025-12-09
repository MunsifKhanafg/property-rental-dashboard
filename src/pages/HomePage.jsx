import React, { useState, useEffect } from 'react';
import { FiSearch, FiGrid, FiList } from 'react-icons/fi';
import PropertyCard from '../components/PropertyCard';
import PropertyDetails from '../components/PropertyDetails';
import FiltersBar from '../components/FiltersBar';
import SkeletonCard from '../components/SkeletonCard';
import { getViewMode, setViewMode as saveViewMode } from '../utils/helpers';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewModeState] = useState(getViewMode());
  const [filters, setFilters] = useState({
    city: 'All',
    type: 'All',
    maxPrice: 30000,
    minRating: 0,
  });

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [properties, filters, searchQuery]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch('/properties.json');
      const data = await response.json();
      
      // Simulate loading delay for better UX
      setTimeout(() => {
        setProperties(data);
        setLoading(false);
      }, 800);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...properties];

    // City filter
    if (filters.city !== 'All') {
      filtered = filtered.filter(p => p.city === filters.city);
    }

    // Type filter
    if (filters.type !== 'All') {
      filtered = filtered.filter(p => p.type === filters.type);
    }

    // Price filter
    filtered = filtered.filter(p => p.price <= filters.maxPrice);

    // Rating filter
    if (filters.minRating > 0) {
      filtered = filtered.filter(p => p.rating >= filters.minRating);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.city.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
      );
    }

    setFilteredProperties(filtered);
  };

  const handleViewModeChange = (mode) => {
    setViewModeState(mode);
    saveViewMode(mode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Dream Property
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Discover the perfect rental property from our curated collection of premium homes
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto animate-slide-up">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search by location, property type, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-primary-300 shadow-2xl text-lg"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
              <div className="text-3xl font-bold">{properties.length}+</div>
              <div className="text-primary-100 text-sm">Properties</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
              <div className="text-3xl font-bold">{new Set(properties.map(p => p.city)).size}+</div>
              <div className="text-primary-100 text-sm">Cities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
              <div className="text-3xl font-bold">4.8</div>
              <div className="text-primary-100 text-sm">Avg Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-primary-100 text-sm">Verified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <FiltersBar filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold">
                  {loading ? 'Loading Properties...' : `${filteredProperties.length} Properties Found`}
                </h2>
                {!loading && searchQuery && (
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Search results for "{searchQuery}"
                  </p>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
                <button
                  onClick={() => handleViewModeChange('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-label="Grid view"
                >
                  <FiGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleViewModeChange('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-label="List view"
                >
                  <FiList className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Properties Grid/List */}
            {loading ? (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-6'}>
                {[...Array(6)].map((_, index) => (
                  <SkeletonCard key={index} viewMode={viewMode} />
                ))}
              </div>
            ) : filteredProperties.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-6'}>
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onClick={setSelectedProperty}
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
                    setFilters({
                      city: 'All',
                      type: 'All',
                      maxPrice: 30000,
                      minRating: 0,
                    });
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

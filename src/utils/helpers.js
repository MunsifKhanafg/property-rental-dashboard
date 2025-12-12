// src/utils/helpers.js

// Function to dispatch an event when favorites change (CRUCIAL for Navbar/FavoritesPage update)
const dispatchFavoritesUpdate = () => {
    window.dispatchEvent(new Event('favoritesUpdated'));
};

// Favorites management
export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (propertyId) => {
    const favorites = getFavorites();
    if (!favorites.includes(propertyId)) {
        favorites.push(propertyId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        // 💡 CRUCIAL: Tell other components to update
        dispatchFavoritesUpdate(); 
    }
};

export const removeFromFavorites = (propertyId) => {
    const favorites = getFavorites();
    const updated = favorites.filter(id => id !== propertyId);
    localStorage.setItem('favorites', JSON.stringify(updated));
    // 💡 CRUCIAL: Tell other components to update
    dispatchFavoritesUpdate(); 
};

export const isFavorite = (propertyId) => {
    const favorites = getFavorites();
    return favorites.includes(propertyId);
};

// Theme management
export const getTheme = () => {
    return localStorage.getItem('theme') || 'light';
};

export const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

// View mode management
export const getViewMode = () => {
    return localStorage.getItem('viewMode') || 'grid';
};

export const setViewMode = (mode) => {
    localStorage.setItem('viewMode', mode);
};

// Format price
export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(price);
};
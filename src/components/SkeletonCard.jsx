import React from 'react';

const SkeletonCard = ({ viewMode = 'grid' }) => {
  const isGridView = viewMode === 'grid';

  return (
    <div className={`card animate-pulse ${isGridView ? '' : 'flex flex-row'}`}>
      {/* Image Skeleton */}
      <div className={`skeleton ${isGridView ? 'h-64' : 'w-64 h-full'}`}></div>
      
      {/* Content Skeleton */}
      <div className={`p-6 flex-1 space-y-4 ${isGridView ? '' : 'flex flex-col justify-between'}`}>
        <div className="space-y-4">
          {/* Title */}
          <div className="skeleton h-6 w-3/4"></div>
          
          {/* Price */}
          <div className="skeleton h-8 w-1/3"></div>
          
          {/* Description */}
          <div className="space-y-2">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-5/6"></div>
          </div>
          
          {/* Location */}
          <div className="skeleton h-4 w-1/2"></div>
          
          {/* Details */}
          <div className="flex space-x-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-20"></div>
          </div>
          
          {/* Amenities */}
          <div className="flex space-x-2">
            <div className="skeleton h-6 w-16 rounded-full"></div>
            <div className="skeleton h-6 w-16 rounded-full"></div>
            <div className="skeleton h-6 w-16 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;

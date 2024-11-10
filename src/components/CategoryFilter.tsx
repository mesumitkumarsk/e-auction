import React from 'react';
import { Tag } from 'lucide-react';
import { useAuctionStore } from '../store/auctionStore';

export const categories = [
  'All Items',
  'Electronics',
  'Collectibles',
  'Art',
  'Vehicles',
  'Jewelry',
  'Real Estate'
];

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useAuctionStore();

  return (
    <div className="flex items-center gap-4 py-4 overflow-x-auto">
      <div className="flex items-center gap-2 text-gray-700 min-w-max">
        <Tag className="w-5 h-5" />
        <span className="font-medium">Categories:</span>
      </div>
      
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-colors
              hover:bg-blue-50 hover:text-blue-600
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              data-[active=true]:bg-blue-100 data-[active=true]:text-blue-600"
            data-active={category === selectedCategory}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
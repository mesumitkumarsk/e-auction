import React from 'react';
import CategoryFilter from '../components/CategoryFilter';
import AuctionCard from '../components/AuctionCard';
import { useAuctionStore } from '../store/auctionStore';

export default function HomePage() {
  const { auctions, selectedCategory, searchQuery, placeBid } = useAuctionStore();

  const filteredAuctions = auctions.filter((auction) => {
    const matchesCategory = selectedCategory === 'All Items' || auction.category === selectedCategory;
    const matchesSearch = auction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         auction.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Auctions</h1>
        <p className="text-gray-600">Discover unique items and place your bids in real-time.</p>
      </div>
      
      <CategoryFilter />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {filteredAuctions.map(item => (
          <AuctionCard
            key={item.id}
            item={item}
            onBid={placeBid}
          />
        ))}
      </div>
    </main>
  );
}
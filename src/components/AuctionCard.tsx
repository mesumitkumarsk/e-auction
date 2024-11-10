import React from 'react';
import { Timer, DollarSign, Users } from 'lucide-react';

interface AuctionItem {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  imageUrl: string;
  endTime: string;
  bidders: number;
}

interface AuctionCardProps {
  item: AuctionItem;
  onBid: (id: string, amount: number) => void;
}

export default function AuctionCard({ item, onBid }: AuctionCardProps) {
  const handleBid = () => {
    const newBid = item.currentBid + 10;
    onBid(item.id, newBid);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white px-3 py-1 rounded-full flex items-center gap-1">
          <Timer className="w-4 h-4" />
          <span className="text-sm">{item.endTime}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-emerald-600">
            <DollarSign className="w-5 h-5" />
            <span className="font-bold text-lg">${item.currentBid}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Users className="w-4 h-4" />
            <span className="text-sm">{item.bidders} bidders</span>
          </div>
        </div>
        
        <button
          onClick={handleBid}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Place Bid (${item.currentBid + 10})
        </button>
      </div>
    </div>
  );
}
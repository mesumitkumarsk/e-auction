import { create } from 'zustand';

export interface AuctionItem {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  imageUrl: string;
  endTime: string;
  bidders: number;
  seller: string;
  category: string;
}

interface AuctionStore {
  auctions: AuctionItem[];
  selectedCategory: string;
  searchQuery: string;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  placeBid: (id: string, amount: number) => void;
  createAuction: (auction: Omit<AuctionItem, 'id' | 'bidders'>) => void;
}

const initialAuctions = [
  {
    id: '1',
    title: 'Vintage Rolex Submariner',
    description: 'Rare 1960s Rolex Submariner in excellent condition. Original parts and documentation included.',
    currentBid: 15000,
    imageUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=800',
    endTime: '2h 45m',
    bidders: 23,
    seller: 'LuxuryWatches',
    category: 'Jewelry'
  },
  {
    id: '2',
    title: 'Modern Art Masterpiece',
    description: 'Original abstract painting by contemporary artist Sarah Chen. Mixed media on canvas.',
    currentBid: 5200,
    imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=800',
    endTime: '4h 15m',
    bidders: 15,
    seller: 'ArtGalleryNYC',
    category: 'Art'
  },
  {
    id: '3',
    title: 'Tesla Model S Plaid',
    description: '2023 Tesla Model S Plaid with full self-driving capability. Only 1,000 miles.',
    currentBid: 89000,
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800',
    endTime: '23h 10m',
    bidders: 45,
    seller: 'LuxuryCars',
    category: 'Vehicles'
  },
  {
    id: '4',
    title: 'Beachfront Villa',
    description: 'Luxury 5-bedroom villa with private beach access in Malibu. Modern architecture with panoramic views.',
    currentBid: 2500000,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    endTime: '5d 12h',
    bidders: 8,
    seller: 'PremiumEstates',
    category: 'Real Estate'
  }
];

export const useAuctionStore = create<AuctionStore>((set) => ({
  auctions: initialAuctions,
  selectedCategory: 'All Items',
  searchQuery: '',
  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  placeBid: (id, amount) => set((state) => ({
    auctions: state.auctions.map((auction) =>
      auction.id === id
        ? { ...auction, currentBid: amount, bidders: auction.bidders + 1 }
        : auction
    ),
  })),

  createAuction: (auction) => set((state) => ({
    auctions: [
      {
        ...auction,
        id: Math.random().toString(36).substr(2, 9),
        bidders: 0,
      },
      ...state.auctions,
    ],
  })),
}));
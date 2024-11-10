import { create } from 'zustand';

interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  signup: (username: string, email: string, password: string) => void;
  logout: () => void;
  notifications: number;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  notifications: 3,
  
  signup: (username, email, password) => {
    set({
      isAuthenticated: true,
      user: {
        id: Math.random().toString(36).substr(2, 9),
        username,
        email,
        avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100`
      }
    });
  },

  login: (email, password) => {
    set({
      isAuthenticated: true,
      user: {
        id: '1',
        username: 'JohnDoe',
        email,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
      }
    });
  },
  
  logout: () => {
    set({
      isAuthenticated: false,
      user: null
    });
  }
}));
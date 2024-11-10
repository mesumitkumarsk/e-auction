import React from 'react';
import { useAuthStore } from '../store/authStore';
import { UserCircle, Mail, Clock, Package } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuthStore();

  const stats = [
    { label: 'Active Bids', value: '12', icon: Clock },
    { label: 'Won Auctions', value: '8', icon: Package },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 h-32"></div>
        <div className="px-6 py-4 -mt-16">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt=""
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
            ) : (
              <UserCircle className="w-24 h-24 text-gray-400 bg-white rounded-full" />
            )}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900">{user?.username}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{user?.email}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"
                >
                  <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
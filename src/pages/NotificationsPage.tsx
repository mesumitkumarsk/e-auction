import React from 'react';
import { Bell, Package, DollarSign, Award } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'Outbid Notice',
    message: 'Someone has outbid you on "Vintage Rolex Submariner"',
    time: '5 minutes ago',
    icon: DollarSign,
    type: 'outbid'
  },
  {
    id: 2,
    title: 'Auction Won',
    message: 'Congratulations! You won the auction for "Modern Art Masterpiece"',
    time: '2 hours ago',
    icon: Award,
    type: 'won'
  },
  {
    id: 3,
    title: 'New Item Available',
    message: 'A new item matching your interests has been listed',
    time: '1 day ago',
    icon: Package,
    type: 'new'
  }
];

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Bell className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
      </div>

      <div className="bg-white rounded-lg shadow divide-y">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className="p-4 hover:bg-gray-50 transition-colors flex items-start gap-4"
            >
              <div className={`
                p-2 rounded-full
                ${notification.type === 'outbid' ? 'bg-red-100 text-red-600' : ''}
                ${notification.type === 'won' ? 'bg-green-100 text-green-600' : ''}
                ${notification.type === 'new' ? 'bg-blue-100 text-blue-600' : ''}
              `}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                <p className="text-gray-600">{notification.message}</p>
                <span className="text-sm text-gray-500">{notification.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
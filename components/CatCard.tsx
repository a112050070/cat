
import React from 'react';
import { Cat } from '../types';

interface CatCardProps {
  cat: Cat;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={cat.imageUrl}
          alt={cat.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex space-x-2">
          <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
            {cat.age}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm ${cat.gender === '公' ? 'bg-blue-400' : 'bg-pink-400'}`}>
            {cat.gender}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{cat.name}</h3>
        <p className="text-[#F39C12] text-sm font-medium mb-3">{cat.breed}</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {cat.location}
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 min-h-[2.5rem]">
          {cat.description}
        </p>
      </div>
    </div>
  );
};

export default CatCard;

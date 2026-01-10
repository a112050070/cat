
import React, { useState, useMemo } from 'react';
import { CATS_DATA } from '../constants';
import CatCard from '../components/CatCard';

const Gallery: React.FC = () => {
  const [filterBreed, setFilterBreed] = useState('全部');
  const [filterGender, setFilterGender] = useState('全部');
  const [filterLocation, setFilterLocation] = useState('全部');

  const breeds = ['全部', ...Array.from(new Set(CATS_DATA.map(c => c.breed)))];
  const locations = ['全部', ...Array.from(new Set(CATS_DATA.map(c => c.location)))];

  const filteredCats = useMemo(() => {
    return CATS_DATA.filter(cat => {
      const breedMatch = filterBreed === '全部' || cat.breed === filterBreed;
      const genderMatch = filterGender === '全部' || cat.gender === filterGender;
      const locationMatch = filterLocation === '全部' || cat.location === filterLocation;
      return breedMatch && genderMatch && locationMatch;
    });
  }, [filterBreed, filterGender, filterLocation]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">領養專區</h1>
          <p className="text-gray-500">尋找與您投緣的毛小孩</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-bold text-gray-400">品種</label>
            <select
              value={filterBreed}
              onChange={(e) => setFilterBreed(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#F39C12] outline-none"
            >
              {breeds.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-bold text-gray-400">性別</label>
            <select
              value={filterGender}
              onChange={(e) => setFilterGender(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#F39C12] outline-none"
            >
              <option value="全部">全部</option>
              <option value="公">公</option>
              <option value="母">母</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-bold text-gray-400">所在地</label>
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#F39C12] outline-none"
            >
              {locations.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
        </div>
      </div>

      {filteredCats.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCats.map(cat => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
          <p className="text-gray-400 text-lg">找不到符合條件的貓咪，請嘗試調整篩選條件。</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;

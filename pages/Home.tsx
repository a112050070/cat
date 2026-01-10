
import React from 'react';
import { Link } from 'react-router-dom';
import { CATS_DATA, NEWS_DATA } from '../constants';
import CatCard from '../components/CatCard';

const Home: React.FC = () => {
  const featuredCats = CATS_DATA.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513360309081-38f0d3d95c76?auto=format&fit=crop&q=80&w=1600"
          alt="Cat Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              讓每一隻街貓，都有溫暖的歸宿
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md opacity-90 font-medium">
              領養，不棄養
            </p>
            <Link
              to="/gallery"
              className="bg-[#F39C12] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#e67e22] transition-all transform hover:scale-105 inline-block shadow-lg"
            >
              立即尋找伴侶
            </Link>
          </div>
        </div>
      </section>

      {/* News Summary */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-20">
        <div className="bg-gray-100/90 backdrop-blur rounded-3xl p-8 shadow-xl border border-white/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {NEWS_DATA.map((news) => (
              <div key={news.id} className="border-l-4 border-[#F39C12] pl-4">
                <span className="text-xs font-bold text-[#F39C12] uppercase tracking-wider">
                  【{news.category}】
                </span>
                <p className="text-gray-800 text-sm mt-1 leading-relaxed line-clamp-3">
                  {news.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">焦點領養動物</h2>
          <div className="w-16 h-1 bg-[#F39C12] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCats.map((cat) => (
            <Link key={cat.id} to={`/gallery`}>
              <CatCard cat={cat} />
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/gallery" className="text-[#F39C12] font-bold border-b-2 border-[#F39C12] hover:text-[#e67e22] hover:border-[#e67e22] transition-all">
            查看更多待領養貓咪
          </Link>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="bg-white py-20 mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-[#F39C12] mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">資訊即時</h3>
              <p className="text-gray-600">與動保處同步更新，提供第一手貓咪領養資訊。</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-[#F39C12] mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">完整諮詢</h3>
              <p className="text-gray-600">專業團隊提供飼養建議，協助新手主人順利度過磨合期。</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-[#F39C12] mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">後續追蹤</h3>
              <p className="text-gray-600">我們重視每一位毛孩的生活品質，定期追蹤適應情況。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

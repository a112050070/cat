
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                {/* Simplified Logo Placeholder */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#F39C12]">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M30 40 Q50 20 70 40 M30 60 Q50 80 70 60" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800 leading-tight">新北市政府</span>
                <span className="text-sm text-gray-600">動物保護防疫處</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#F39C12] transition-colors">回首頁</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-[#F39C12] transition-colors">我想領養</Link>
            <Link to="/process" className="text-gray-700 hover:text-[#F39C12] transition-colors">領養須知</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#F39C12] transition-colors">關於我們</Link>
            <Link to="/contact" className="text-white bg-[#F39C12] px-4 py-2 rounded-full hover:bg-[#e67e22] transition-all">線上諮詢</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-lg animate-fade-in-down">
          <div className="px-4 space-y-4 flex flex-col">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 py-2 border-b border-gray-50">回首頁</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-gray-700 py-2 border-b border-gray-50">我想領養</Link>
            <Link to="/process" onClick={() => setIsOpen(false)} className="text-gray-700 py-2 border-b border-gray-50">領養須知</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 py-2 border-b border-gray-50">關於我們</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-[#F39C12] font-bold py-2">線上諮詢</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

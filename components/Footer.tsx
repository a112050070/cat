
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">聯絡資訊</h3>
            <p className="text-gray-600 mb-2">電話：(02) 2959-6353</p>
            <p className="text-gray-600 mb-2">地址：新北市板橋區四川路一段147號</p>
            <p className="text-gray-600">服務時間：週一至週五 08:30-17:30</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">相關連結</h3>
            <ul className="space-y-2">
              <li><a href="https://www.ahiqo.ntpc.gov.tw/" target="_blank" className="text-gray-600 hover:text-[#F39C12]">新北市政府動保處官網</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#F39C12]">政府公開資料平台</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#F39C12]">隱私權政策</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-gray-800 mb-4">關注我們</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">f</div>
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">ig</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} 新北市政府動物保護防疫處. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

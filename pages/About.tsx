
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">關於我們</h1>

      <div className="prose prose-orange max-w-none text-gray-600 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">核心價值</h2>
          <p className="leading-relaxed">
            新北市流浪貓領養平台是由新北市政府動保處支持的官方平台。我們的使命是為每一隻進入動物之家的流浪貓尋找最適合的永久家庭。我們相信「領養，不棄養」不只是一個口號，而是一種負責任的生活態度。
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-4xl font-bold text-[#F39C12] mb-2">5,000+</h3>
            <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">年度成功媒合數</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-4xl font-bold text-[#F39C12] mb-2">8</h3>
            <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">遍布新北的動物之家</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">救援實績</h2>
          <p className="leading-relaxed">
            我們除了提供領養服務，也積極推動 TNR (捕捉、絕育、回置) 計畫。透過社區合作與志工支持，我們在過去一年內已完成超過 3,000 隻母貓的絕育手術，顯著降低了街頭浪貓的增長速度。
          </p>
        </section>

        <section className="bg-[#F39C12]/5 p-8 rounded-3xl border border-[#F39C12]/20 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">聯絡資訊</h2>
          <div className="space-y-3">
            <p className="flex items-center"><span className="font-bold w-24">服務專線：</span> (02) 2959-6353</p>
            <p className="flex items-center"><span className="font-bold w-24">電子信箱：</span> contact@ahiqo.ntpc.gov.tw</p>
            <p className="flex items-start"><span className="font-bold w-24">辦公地址：</span> <span>新北市板橋區四川路一段147號</span></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

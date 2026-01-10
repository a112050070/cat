
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { title: '線上預約/實地參訪', desc: '在官網瀏覽心儀的貓咪後，可線上預約或直接前往動物之家。' },
    { title: '面談評估', desc: '工作人員會與您進行簡單面談，了解您的飼養環境與觀念。' },
    { title: '領養登記', desc: '確認領養後，辦理寵物登記、植入晶片並施打狂犬病疫苗。' },
    { title: '正式帶回家', desc: '簽署領養切結書後，就能正式迎接毛小孩回家囉！' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">領養流程說明</h1>

      <div className="space-y-8 mb-20 relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-orange-100 hidden md:block"></div>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center relative">
            <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 shrink-0 md:mr-8 mb-4 md:mb-0 shadow-lg">
              {index + 1}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">下載專區</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="#"
            className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors border border-transparent hover:border-[#F39C12]"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#F39C12] shadow-sm mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-800 text-sm">領養切結書 (PDF)</p>
              <p className="text-xs text-gray-400">Adopt_Commitment_Form.pdf</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors border border-transparent hover:border-[#F39C12]"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#F39C12] shadow-sm mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-800 text-sm">飼養前 Checklist</p>
              <p className="text-xs text-gray-400">Pre_Adoption_Checklist.pdf</p>
            </div>
          </a>
        </div>
      </section>

      <div className="mt-12 p-6 bg-yellow-50 rounded-2xl border border-yellow-100 flex items-start space-x-4">
        <svg className="w-6 h-6 text-yellow-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-yellow-800 text-sm">
          <strong>法規提醒：</strong> 依動物保護法規定，飼主應為寵物辦理登記。棄養動物可處最高新台幣 15 萬元罰鍰。請在領養前深思熟慮。
        </p>
      </div>
    </div>
  );
};

export default Process;

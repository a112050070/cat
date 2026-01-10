
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for form handling would go here
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">提交成功！</h2>
        <p className="text-gray-600 mb-8">感謝您的來信，工作人員將會在 2-3 個工作天內與您聯絡。</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[#F39C12] font-bold"
        >
          返回表單
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">線上諮詢 / 領養意願書</h1>
      <p className="text-gray-500 text-center mb-12">如果您對特定貓咪有興趣，或是想了解更多領養細節，歡迎填寫下表。</p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">真實姓名</label>
            <input
              type="text"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F39C12] outline-none"
              placeholder="請輸入姓名"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">聯絡電話</label>
            <input
              type="tel"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F39C12] outline-none"
              placeholder="09xx-xxx-xxx"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-bold text-gray-700">電子信箱</label>
          <input
            type="email"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F39C12] outline-none"
            placeholder="example@mail.com"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-bold text-gray-700">諮詢項目</label>
          <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F39C12] outline-none">
            <option>我想領養特定貓咪 (請在下方備註名字)</option>
            <option>領養流程諮詢</option>
            <option>我想成為中途家庭</option>
            <option>其他</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-bold text-gray-700">您的訊息</label>
          <textarea
            required
            rows={4}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F39C12] outline-none"
            placeholder="請簡述您的情況或想詢問的問題..."
          ></textarea>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" required className="w-4 h-4 text-[#F39C12] border-gray-300 rounded focus:ring-[#F39C12]" />
          <span className="text-sm text-gray-500">我已閱讀並同意隱私權政策及相關領養規範</span>
        </div>

        <button
          type="submit"
          className="w-full bg-[#F39C12] text-white py-4 rounded-xl font-bold hover:bg-[#e67e22] transition-all transform hover:shadow-lg active:scale-95"
        >
          提交意願書
        </button>
      </form>
    </div>
  );
};

export default Contact;

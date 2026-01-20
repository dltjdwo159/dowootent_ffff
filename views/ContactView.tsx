
import React from 'react';
import { SiteConfig } from '../types';

interface ContactViewProps {
  config: SiteConfig;
}

const ContactView: React.FC<ContactViewProps> = ({ config }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">견적문의</h1>
          <p className="text-gray-500 text-lg">도우텐트의 전문가가 최적의 설루션을 제안해 드립니다.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 연락처 상세 정보 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">연락처 정보</h2>
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-2xl mr-6 text-blue-600 text-2xl shadow-inner">📍</div>
                <div>
                  <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider mb-1">사무실 주소</h4>
                  <p className="text-gray-800 text-xl font-medium leading-snug">{config.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-2xl mr-6 text-blue-600 text-2xl shadow-inner">📞</div>
                <div>
                  <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider mb-1">대표 번호</h4>
                  <p className="text-gray-800 text-2xl font-black">{config.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-2xl mr-6 text-blue-600 text-2xl shadow-inner">✉️</div>
                <div>
                  <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider mb-1">이메일</h4>
                  <p className="text-gray-800 text-xl font-medium">{config.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 상담 안내 및 강조 박스 */}
          <div className="bg-[#003399] text-white p-12 rounded-3xl shadow-2xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors duration-700"></div>
            <div className="relative z-10">
              <span className="inline-block bg-blue-500/30 text-blue-100 px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Consultation</span>
              <h3 className="text-3xl font-extrabold mb-6 leading-tight">빠르고 친절하게<br/>상담해 드립니다</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-10 font-light break-keep">
                산업용 천막, 물류창고, 철구조물 시공에 관한 궁금하신 점이 있으시면 언제든 편하게 연락 주세요.<br/><br/>
                현장 방문 견적부터 설계 상담까지 도우텐트의 전문가가 직접 도움을 드립니다.
              </p>
              <div className="space-y-4">
                <p className="text-blue-300 font-bold text-sm">지금 바로 전화 상담하기</p>
                <a 
                  href={`tel:${config.phone.replace(/-/g, '')}`} 
                  className="inline-block bg-white text-[#003399] text-3xl font-black py-4 px-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  {config.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 지도 또는 안내 텍스트 추가 가능 구역 */}
        <div className="mt-20 text-center text-gray-400 font-medium">
          <p>평일: 09:00 - 18:00 / 토요일: 09:00 - 13:00 (일요일 및 공휴일 휴무)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactView;

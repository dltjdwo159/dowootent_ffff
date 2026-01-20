
import React from 'react';
import { Service } from '../types';

interface ServicesViewProps {
  services: Service[];
}

const ServicesView: React.FC<ServicesViewProps> = ({ services }) => {
  // 사용자가 이전에 제공한 이미지 URL들
  const serviceImages = [
    "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_202%2F1623915445291rh3Ii_JPEG%2Fypm-pX4uPK-qjoZZmjRnGraW.jpg",
    "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_234%2F1623915459562ddAd0_JPEG%2Fb3Ph-EqG6UCGvWGK_z7v_0DN.jpg",
    "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_271%2F1623915460751n6MHM_JPEG%2Fm7ct9z5yd5v9jrde6At1ZqMT.jpg",
    "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_28%2F16239154861621drxi_JPEG%2FpZE05Bld5eRMRsL6W0rnXd7s.jpg"
  ];

  return (
    <div className="bg-white">
      <div className="py-24 bg-[#003399] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">주요사업</h1>
          <div className="w-20 h-1.5 bg-white mb-6"></div>
          <p className="text-blue-100 text-lg md:text-xl font-light">도우텐트가 제안하는 독보적인 산업 설루션입니다.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-32 space-y-40">
        {services.map((service, idx) => (
          <div key={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
            <div className="flex-1">
              <span className="text-blue-600 font-black text-sm tracking-[0.2em] mb-4 block uppercase">Expertise 0{idx + 1}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">{service.title}</h2>
              <div className="text-gray-600 text-lg leading-relaxed mb-10 space-y-6 break-keep">
                <p className="font-medium text-slate-800">
                  {service.description}
                </p>
                <p className="text-base text-gray-500 leading-relaxed">
                  산업 현장의 특수성을 고려한 맞춤 설계로 최상의 효율을 약속합니다. 
                  도우텐트만의 고강도 프레임과 특수 코팅 원단은 기상 악조건 속에서도 
                  장기간 안정적인 사용이 가능하도록 제작되었습니다.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['KS인증 정품 자재 사용', '경제적인 시공 비용', '신속한 사후 관리', '현장 맞춤형 정밀 설계'].map((item, i) => (
                  <div key={i} className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-blue-600 mr-3 font-bold">✓</span>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full aspect-[4/3] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
              <img 
                src={serviceImages[idx % serviceImages.length]} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 추가 장점 섹션 */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">왜 도우텐트인가?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl mb-6">🏗️</div>
              <h4 className="text-xl font-bold mb-4">정밀 시공</h4>
              <p className="text-gray-500 text-sm leading-relaxed">수천 건의 시공 경험으로 축적된<br/>기술팀이 직접 책임 시공합니다.</p>
            </div>
            <div>
              <div className="text-4xl mb-6">🛡️</div>
              <h4 className="text-xl font-bold mb-4">안전성 보장</h4>
              <p className="text-gray-500 text-sm leading-relaxed">강풍과 폭설에도 끄떡없는<br/>구조 계산 기반의 설계.</p>
            </div>
            <div>
              <div className="text-4xl mb-6">🤝</div>
              <h4 className="text-xl font-bold mb-4">신속한 AS</h4>
              <p className="text-gray-500 text-sm leading-relaxed">문제 발생 시 즉시 대응하는<br/>철저한 고객 지원 시스템.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesView;

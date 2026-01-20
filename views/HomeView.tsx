
import React from 'react';
import { ViewState, Project, Service } from '../types';

interface HomeViewProps {
  setView: (view: ViewState) => void;
  projects: Project[];
  services: Service[];
}

const HomeView: React.FC<HomeViewProps> = ({ setView, projects, services }) => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_271%2F1623915622659W53Hs_JPEG%2FDvcve-BzrRyw-CUlXPA5k4CB.jpg" 
            alt="Main Banner" 
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl animate-custom-fade-up">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.15] break-keep">
              공간의 가치를 만드는<br/>
              <span className="text-blue-400">주식회사 도우텐트</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl break-keep font-light">
              25년 기술력으로 설계부터 시공까지, 대형 산업용 천막 및 철구조물 최고의 파트너가 되어드립니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setView('CONTACT')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl active:scale-95"
              >
                무료 견적 상담
              </button>
              <button 
                onClick={() => setView('PORTFOLIO')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                시공사례 보기
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-12 right-12 z-20 animate-custom-fade-in" style={{ opacity: 0, animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="bg-[#003399] text-white p-6 rounded-3xl shadow-2xl w-[280px] border border-blue-400/20">
            <p className="text-blue-300 text-[10px] font-bold tracking-widest uppercase mb-2 text-center">Contact Us</p>
            <a 
              href="tel:01098396979" 
              className="bg-white text-[#003399] text-2xl font-black py-4 rounded-xl flex items-center justify-center hover:bg-blue-50 transition-colors shadow-lg"
            >
              010-9839-6979
            </a>
          </div>
        </div>
      </section>

      {/* 핵심 설루션 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 설루션</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 mx-auto">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed break-keep">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시공 사례 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">최근 시공 사례</h2>
              <p className="text-gray-500">도우텐트가 완료한 검증된 프로젝트입니다.</p>
            </div>
            <button onClick={() => setView('PORTFOLIO')} className="text-blue-600 font-bold hover:underline flex items-center">
              전체보기 <span className="ml-2">→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5 bg-slate-100 shadow-sm border border-slate-100">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="px-1">
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;

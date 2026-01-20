
import React from 'react';
import { SiteConfig, ViewState } from '../types';

interface FooterProps {
  config: SiteConfig;
  setView: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ config, setView }) => {
  const logoUrl = "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_149%2F1623912999712z9TGi_PNG%2F31tV7Z5pzct3FXwaoy3hwJtp.png";

  return (
    <footer className="bg-[#0a0f1d] text-white py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column - Expanded to span more columns for impact */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex flex-col space-y-6">
              <div className="bg-white p-3 rounded-xl shadow-lg self-start inline-block transition-transform hover:scale-105 duration-300">
                <img 
                  src={logoUrl} 
                  alt="주식회사 도우텐트 로고" 
                  className="h-16 md:h-20 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-white">
                  {config.companyName}
                </h2>
                <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full"></div>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md break-keep font-light">
                  25년 이상의 현장 노하우와 압도적인 기술력으로 
                  산업 환경의 혁신을 선도합니다. 대형천막 및 철구조물 
                  설계부터 준공까지 원스톱으로 책임지는 전문 기업입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Spacer column to prevent crowding */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Quick Links Column */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-8 text-blue-500 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              바로가기
            </h3>
            <ul className="space-y-4 text-slate-300 font-medium text-base">
              <li><button onClick={() => setView('ABOUT')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300">회사소개</button></li>
              <li><button onClick={() => setView('SERVICES')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300">주요사업</button></li>
              <li><button onClick={() => setView('PORTFOLIO')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300">시공사례</button></li>
              <li><button onClick={() => setView('CONTACT')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300">견적문의</button></li>
            </ul>
          </div>

          {/* Contact Column - More detailed icons and bold phone number */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-8 text-blue-500 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              고객지원
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="bg-slate-800 p-3 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">LOCATION</p>
                  <p className="text-slate-200 leading-snug">{config.address}</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-slate-800 p-3 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">CALL CENTER</p>
                  <p className="text-2xl font-black text-white tracking-tight">{config.phone}</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-slate-800 p-3 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">EMAIL CONTACT</p>
                  <p className="text-slate-200">{config.email}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>
            <p>© 2024 {config.companyName}. 시공 기술력 NO.1 파트너</p>
          </div>
          <div className="space-x-8 flex">
            <a href="#" className="hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400/30 pb-0.5">개인정보처리방침</a>
            <a href="#" className="hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400/30 pb-0.5">이용약관</a>
            <a href="#" className="hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400/30 pb-0.5">찾아오시는 길</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

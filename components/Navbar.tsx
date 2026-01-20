
import React, { useState } from 'react';
import { ViewState, SiteConfig } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  config: SiteConfig;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, config }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { label: string; view: ViewState }[] = [
    { label: '홈', view: 'HOME' },
    { label: '회사소개', view: 'ABOUT' },
    { label: '주요사업', view: 'SERVICES' },
    { label: '시공사례', view: 'PORTFOLIO' },
    { label: '견적문의', view: 'CONTACT' },
  ];

  const logoUrl = "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_149%2F1623912999712z9TGi_PNG%2F31tV7Z5pzct3FXwaoy3hwJtp.png";

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-[100] border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => setView('HOME')}>
            <img 
              src={logoUrl} 
              alt="주식회사 도우텐트 로고" 
              className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setView(item.view)}
                className={`text-sm font-bold transition-colors ${
                  currentView === item.view ? 'text-blue-700' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setView('ADMIN')}
              className="text-[10px] bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all ml-4"
            >
              ADMIN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 focus:outline-none p-2"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-6 py-8 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  setView(item.view);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-3 text-lg font-bold ${
                  currentView === item.view ? 'text-blue-700' : 'text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  setView('ADMIN');
                  setIsOpen(false);
                }}
                className="text-slate-400 font-medium"
              >
                관리자 모드
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

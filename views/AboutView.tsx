
import React from 'react';

const AboutView: React.FC = () => {
  const logoUrl = "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_149%2F1623912999712z9TGi_PNG%2F31tV7Z5pzct3FXwaoy3hwJtp.png";

  return (
    <div className="bg-white min-h-screen">
      <div className="py-20 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">회사소개</h1>
          <p className="text-gray-500">신뢰와 기술로 미래를 덮습니다.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* 상단 중앙 로고 섹션 (로고 박스는 작게 유지) */}
        <div className="flex justify-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white p-6 border border-gray-100 max-w-[240px]">
            <img 
              src={logoUrl} 
              alt="주식회사 도우텐트 로고" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>

        {/* 텍스트 섹션 (좌측 정렬 및 글씨 크기 확대) */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 leading-tight text-left">
            최고의 품질과 안전을 지향하는<br/>
            <span className="text-blue-600">주식회사 도우텐트</span>
          </h2>
          <div className="space-y-10 text-gray-700 leading-relaxed text-xl md:text-2xl break-keep text-left">
            <p>
              주식회사 도우텐트는 지난 25년간 대형 산업용 천막, 창고용 천막, 철구조물 분야에서 전문성을 쌓아온 업계의 리더입니다.
            </p>
            <p>
              단순히 공간을 덮는 것을 넘어, 고객사의 소중한 자산을 보호하고 작업 효율을 극대화할 수 있는 최적의 설루션을 제공하기 위해 끊임없이 연구하고 도전하고 있습니다.
            </p>
            <p>
              우리는 모든 공정에 있어 '안전'과 '품질'을 타협하지 않으며, 신속한 시공과 철저한 사후 관리를 약속드립니다.
            </p>
          </div>
        </div>

        {/* 핵심 가치 섹션 */}
        <div className="mt-32">
          <h3 className="text-2xl font-bold mb-12 text-center underline decoration-blue-500 decoration-4 underline-offset-8">기업 핵심 가치</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '기술 혁신', desc: '최신 원단과 정밀 철골 설계로 견고함을 더합니다.' },
              { title: '고객 신뢰', desc: '약속한 기일을 지키고 끝까지 책임지는 서비스를 제공합니다.' },
              { title: '현장 안전', desc: '무사고 시공을 원칙으로 작업자와 시설의 안전을 보장합니다.' },
            ].map((v, i) => (
              <div key={i} className="bg-white border p-8 rounded-xl text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold">{i+1}</div>
                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;

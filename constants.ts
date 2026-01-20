
import { Project, Service, SiteConfig } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  companyName: '주식회사 도우텐트',
  primaryColor: '#003399',
  phone: '010-9839-6979',
  address: '경기 화성시 서신면 제부로 1062',
  email: 'dowootent@gmail.com'
};

export const INITIAL_SERVICES: Service[] = [
  { 
    id: '1', 
    title: '대형 산업용 천막', 
    description: '대규모 부지 활용을 위한 고강도 대형 시스템을 구축합니다.', 
    icon: 'Warehouse' 
  },
  { 
    id: '2', 
    title: '물류 창고 천막', 
    description: '빈틈없는 방수와 내구성으로 귀사의 소중한 물류 자산을 완벽하게 보호합니다.', 
    icon: 'Truck' 
  },
  { 
    id: '3', 
    title: '철구조물 제작', 
    description: '구조적 안정성을 최우선으로, 정밀한 설계 기반의 견고한 산업 골조를 제작합니다.', 
    icon: 'Layers' 
  },
  { 
    id: '4', 
    title: '중소형 특수 천막', 
    description: '현장 환경과 용도에 최적화된 유연하고 경제적인 맞춤형 차폐 설루션을 제안합니다.', 
    icon: 'Umbrella' 
  }
];

export const INITIAL_PROJECTS: Project[] = [
  { 
    id: '1', 
    title: '대형 천막 시공', 
    category: '대형천막', 
    date: '2024-03-20', 
    description: '대규모 부지에 맞춤 설계된 고강도 산업용 대형 천막 설치 사례입니다.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_202%2F1623915445291rh3Ii_JPEG%2Fypm-pX4uPK-qjoZZmjRnGraW.jpg' 
  },
  { 
    id: '2', 
    title: '물류 창고 시스템 구축', 
    category: '물류창고천막', 
    date: '2024-03-10', 
    description: '내구성이 뛰어난 원단을 사용하여 물류 보관 효율을 높인 창고형 천막입니다.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_234%2F1623915459562ddAd0_JPEG%2Fb3Ph-EqG6UCGvWGK_z7v_0DN.jpg' 
  },
  { 
    id: '3', 
    title: '산업 현장 철구조물 설치', 
    category: '철구조물', 
    date: '2024-02-28', 
    description: '정밀한 설계를 바탕으로 한 견고한 철골조 및 외장 마감 시공.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_271%2F1623915460751n6MHM_JPEG%2Fm7ct9z5yd5v9jrde6At1ZqMT.jpg' 
  },
  { 
    id: '4', 
    title: '대형 보관소 신축 공사', 
    category: '대형천막', 
    date: '2024-02-15', 
    description: '공간 활용도를 극대화한 대형 산업용 보호 천막 시스템.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_43%2F1623915480093icU4j_JPEG%2FwN9FBizToumOd1izFv6V97gy.jpg' 
  },
  { 
    id: '5', 
    title: '특수 창고형 천막 시공', 
    category: '물류창고천막', 
    date: '2024-01-30', 
    description: '기상 변화에 강한 방수 및 방염 소재를 적용한 특수 창고 설루션.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_125%2F1623915484552TClbK_JPEG%2FX9cuijzVkQvKcYsZo-G1oS92.jpg' 
  },
  { 
    id: '6', 
    title: '복합 철골조 천막 시공', 
    category: '철구조물', 
    date: '2024-01-12', 
    description: '철제 프레임과 고강도 원단을 결합한 복합 산업 구조물.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_238%2F1623915485440KxsB3_JPEG%2FWbjmu89sFvIbO_m7LoSWwqX4.jpg' 
  },
  { 
    id: '7', 
    title: '자재 보관용 중형 천막', 
    category: '중소형천막', 
    date: '2023-12-20', 
    description: '신속한 설치와 해체가 가능한 경제적인 자재 보호용 천막.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_28%2F16239154861621drxi_JPEG%2FpZE05Bld5eRMRsL6W0rnXd7s.jpg' 
  },
  { 
    id: '8', 
    title: '야드 비가림 시설', 
    category: '대형천막', 
    date: '2023-12-05', 
    description: '야외 작업장 효율 향상을 위한 대형 비가림 천막 설치.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_72%2F1623915513385pd0Ge_JPEG%2FTJdexV8ilXsAhAbLZl8knK7S.jpg' 
  },
  { 
    id: '9', 
    title: '산업단지 내 물류 텐트', 
    category: '물류창고천막', 
    date: '2023-11-15', 
    description: '산업단지 특화 대형 물류 보관 시스템 구축 완료.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_76%2F1623915529957Ch6An_JPEG%2F8jRz1itwB83leu5s_qT06PFA.jpg' 
  },
  { 
    id: '10', 
    title: '고정식 특수 철구조물', 
    category: '철구조물', 
    date: '2023-10-25', 
    description: '영구적인 사용을 목적으로 한 견고한 산업용 고정 구조물.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_266%2F1623915600650S76Km_JPEG%2FAUAd5_wZy-3l9Y9mU-cW_aqj.jpg' 
  },
  { 
    id: '11', 
    title: '대형 현장 임시 창고', 
    category: '대형천막', 
    date: '2023-10-05', 
    description: '공사 기간 중 원활한 자재 수급을 위한 대형 임시 창고동 시공.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_38%2F1623915601913U9M95_JPEG%2F6uWmq52eq_A1LDaHtGFd2NdL.jpg' 
  },
  { 
    id: '12', 
    title: '시스템 천막 골조 작업', 
    category: '철구조물', 
    date: '2023-09-15', 
    description: '천막 피복 전 정밀하게 시공된 대형 철골 프레임 공정.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_26%2F1623915602994ciLXB_JPEG%2Fah3NomFZ1JD70r3CcEGkILUV.jpg' 
  },
  { 
    id: '13', 
    title: '맞춤형 창고 외장 시공', 
    category: '물류창고천막', 
    date: '2023-08-28', 
    description: '기업 아이덴티티를 고려한 깔끔한 외관의 창고형 천막 완성.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_59%2F1623915603130aUeJK_JPEG%2FTsIsNUk_Wz217orkqTiJRYpq.jpg' 
  },
  { 
    id: '14', 
    title: '대규모 야적장 차폐 시공', 
    category: '대형천막', 
    date: '2023-08-10', 
    description: '먼지 및 우천 피해 방지를 위한 대규모 부지 차폐 천막 프로젝트.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_116%2F1623915605811FflVh_JPEG%2FWe-Ze3LK-j3tJjWiuDoIAzKd.jpg' 
  },
  { 
    id: '15', 
    title: '최종 준공 현장 전경', 
    category: '대형천막', 
    date: '2023-07-20', 
    description: '모든 공정이 마무리된 고품질 대형 산업용 천막 준공 사진.', 
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_271%2F1623915622659W53Hs_JPEG%2FDvcve-BzrRyw-CUlXPA5k4CB.jpg' 
  }
];

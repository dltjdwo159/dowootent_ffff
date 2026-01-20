
import React, { useState } from 'react';
import { SiteConfig, Project } from '../types';

interface AdminDashboardProps {
  config: SiteConfig;
  setConfig: (config: SiteConfig) => void;
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ config, setConfig, projects, setProjects }) => {
  const [activeTab, setActiveTab] = useState<'SITE' | 'PROJECTS'>('SITE');
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '', category: '대형천막', description: '', imageUrl: 'https://picsum.photos/800/600'
  });

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const addProject = () => {
    if (newProject.title) {
      const project: Project = {
        id: Date.now().toString(),
        title: newProject.title,
        category: newProject.category || '기타',
        description: newProject.description || '',
        date: new Date().toISOString().split('T')[0],
        imageUrl: newProject.imageUrl || 'https://picsum.photos/800/600'
      };
      setProjects([project, ...projects]);
      setNewProject({ title: '', category: '대형천막', description: '', imageUrl: 'https://picsum.photos/800/600' });
    }
  };

  const deleteProject = (id: string) => {
    if (window.confirm('이 시공사례를 삭제하시겠습니까?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-slate-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center">
            <span className="mr-2">⚙️</span> 관리자 센터
          </h1>
          <div className="flex space-x-2 bg-slate-800 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('SITE')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'SITE' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              기본 설정
            </button>
            <button 
              onClick={() => setActiveTab('PROJECTS')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'PROJECTS' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              포트폴리오
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'SITE' ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 max-w-2xl mx-auto border border-slate-200">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">비즈니스 정보 관리</h2>
            <div className="space-y-6">
              {[
                { label: '회사명', name: 'companyName' },
                { label: '대표 전화번호', name: 'phone' },
                { label: '사무실 주소', name: 'address' },
                { label: '대표 이메일', name: 'email' }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-bold text-gray-600 mb-2">{field.label}</label>
                  <input 
                    name={field.name} 
                    value={(config as any)[field.name]} 
                    onChange={handleConfigChange} 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">메인 컬러</label>
                <div className="flex items-center space-x-4">
                  <input 
                    type="color" 
                    name="primaryColor" 
                    value={config.primaryColor} 
                    onChange={handleConfigChange} 
                    className="h-12 w-24 cursor-pointer rounded-lg border border-slate-200" 
                  />
                  <span className="text-gray-500 font-mono text-sm uppercase">{config.primaryColor}</span>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-100 flex justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all">설정 저장하기</button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-10 border border-slate-200">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">새 시공 사례 업로드</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">프로젝트 제목</label>
                    <input 
                      placeholder="예: 경기 화성 물류창고 신축" 
                      value={newProject.title} 
                      onChange={e => setNewProject({...newProject, title: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">카테고리</label>
                    <select 
                      value={newProject.category} 
                      onChange={e => setNewProject({...newProject, category: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option>대형천막</option>
                      <option>물류창고천막</option>
                      <option>철구조물</option>
                      <option>중소형천막</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">대표 이미지 URL</label>
                    <input 
                      placeholder="https://..." 
                      value={newProject.imageUrl} 
                      onChange={e => setNewProject({...newProject, imageUrl: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">상세 설명</label>
                  <textarea 
                    placeholder="시공 현장 특이사항 및 상세 설명을 입력하세요." 
                    value={newProject.description}
                    onChange={e => setNewProject({...newProject, description: e.target.value})}
                    className="w-full h-[calc(100%-1.25rem)] px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button onClick={addProject} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all">포트폴리오 추가</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-8 py-5 font-bold text-slate-600 text-sm">대표 이미지</th>
                      <th className="px-8 py-5 font-bold text-slate-600 text-sm">프로젝트</th>
                      <th className="px-8 py-5 font-bold text-slate-600 text-sm">카테고리</th>
                      <th className="px-8 py-5 font-bold text-slate-600 text-sm">시공일</th>
                      <th className="px-8 py-5 font-bold text-slate-600 text-sm text-right">관리</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {projects.map(p => (
                      <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-8 py-4">
                          <div className="w-20 aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                            <img src={p.imageUrl} className="w-full h-full object-cover" />
                          </div>
                        </td>
                        <td className="px-8 py-4 font-bold text-slate-800">{p.title}</td>
                        <td className="px-8 py-4">
                           <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold border border-slate-200">
                            {p.category}
                           </span>
                        </td>
                        <td className="px-8 py-4 text-slate-500 text-sm">{p.date}</td>
                        <td className="px-8 py-4 text-right">
                          <button 
                            onClick={() => deleteProject(p.id)}
                            className="text-red-500 hover:text-white hover:bg-red-500 px-4 py-1.5 rounded-lg text-sm font-bold transition-all border border-transparent hover:border-red-600"
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

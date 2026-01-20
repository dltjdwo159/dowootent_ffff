
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
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-slate-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center">
            <span className="mr-2">⚙️</span> 통합 관리자 대시보드
          </h1>
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveTab('SITE')}
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'SITE' ? 'bg-blue-600' : 'bg-slate-700 hover:bg-slate-600'}`}
            >
              사이트 설정
            </button>
            <button 
              onClick={() => setActiveTab('PROJECTS')}
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'PROJECTS' ? 'bg-blue-600' : 'bg-slate-700 hover:bg-slate-600'}`}
            >
              포트폴리오 관리
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'SITE' ? (
          <div className="bg-white rounded-xl shadow-sm p-8 max-w-2xl mx-auto border">
            <h2 className="text-2xl font-bold mb-8">일반 사이트 설정</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">회사명</label>
                <input name="companyName" value={config.companyName} onChange={handleConfigChange} className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">대표 전화번호</label>
                <input name="phone" value={config.phone} onChange={handleConfigChange} className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">사무실 주소</label>
                <input name="address" value={config.address} onChange={handleConfigChange} className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">대표 이메일</label>
                <input name="email" value={config.email} onChange={handleConfigChange} className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">브랜드 메인 컬러</label>
                <div className="flex items-center space-x-4">
                  <input type="color" name="primaryColor" value={config.primaryColor} onChange={handleConfigChange} className="h-10 w-20 cursor-pointer" />
                  <span className="text-gray-500 font-mono">{config.primaryColor}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t flex justify-end">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold">변경사항 저장</button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-8 border">
              <h2 className="text-2xl font-bold mb-6">새 시공사례 추가</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  placeholder="공사 타이틀" 
                  value={newProject.title} 
                  onChange={e => setNewProject({...newProject, title: e.target.value})}
                  className="px-4 py-2 border rounded-md"
                />
                <select 
                  value={newProject.category} 
                  onChange={e => setNewProject({...newProject, category: e.target.value})}
                  className="px-4 py-2 border rounded-md"
                >
                  <option>대형천막</option>
                  <option>물류창고천막</option>
                  <option>철구조물</option>
                  <option>중소형천막</option>
                </select>
                <input 
                  placeholder="이미지 URL (picsum 등)" 
                  value={newProject.imageUrl} 
                  onChange={e => setNewProject({...newProject, imageUrl: e.target.value})}
                  className="px-4 py-2 border rounded-md"
                />
                <textarea 
                  placeholder="공사 설명" 
                  value={newProject.description}
                  onChange={e => setNewProject({...newProject, description: e.target.value})}
                  className="px-4 py-2 border rounded-md col-span-1 md:col-span-2"
                />
              </div>
              <button onClick={addProject} className="mt-6 bg-blue-600 text-white px-8 py-2 rounded-md font-bold">추가하기</button>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 font-bold text-gray-600">이미지</th>
                    <th className="px-6 py-4 font-bold text-gray-600">제목</th>
                    <th className="px-6 py-4 font-bold text-gray-600">카테고리</th>
                    <th className="px-6 py-4 font-bold text-gray-600">날짜</th>
                    <th className="px-6 py-4 font-bold text-gray-600">작업</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {projects.map(p => (
                    <tr key={p.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <img src={p.imageUrl} className="w-16 h-12 object-cover rounded" />
                      </td>
                      <td className="px-6 py-4 font-medium">{p.title}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{p.category}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{p.date}</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => deleteProject(p.id)}
                          className="text-red-500 hover:text-red-700 text-sm font-bold"
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
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

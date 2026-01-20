
import React, { useState } from 'react';
import { Project } from '../types';

interface PortfolioViewProps {
  projects: Project[];
}

const PortfolioView: React.FC<PortfolioViewProps> = ({ projects }) => {
  const [filter, setFilter] = useState('전체');
  const categories = ['전체', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === '전체' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-center">시공사례</h1>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-700 shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h3>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{project.date}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-50 flex justify-end">
                  <button className="text-blue-600 text-sm font-semibold group-hover:underline">상세보기</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioView;

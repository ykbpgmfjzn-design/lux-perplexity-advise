
import React, { useState } from 'react';
import { Project, ProjectStatus, ProjectType } from '../types';
import { PROJECTS_DATA } from '../constants';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<{ type: ProjectType | 'All', status: ProjectStatus | 'All' }>({
    type: 'All',
    status: 'All'
  });

  const filteredProjects = PROJECTS_DATA.filter(p => {
    const typeMatch = filter.type === 'All' || p.type === filter.type;
    const statusMatch = filter.status === 'All' || p.status === filter.status;
    return typeMatch && statusMatch;
  });

  const types: (ProjectType | 'All')[] = ['All', 'Villa', 'Residence', 'Apartment', 'Penthouse'];
  const statuses: (ProjectStatus | 'All')[] = ['All', 'In Construction', 'Completed', 'Sold Out'];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Residences</h2>
            <p className="text-gray-500 max-w-md">Discover a curated collection of world-class properties designed for modern living.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Property Type</span>
              <div className="flex gap-2">
                <select 
                  className="bg-gray-50 border-none outline-none text-sm px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
                  onChange={(e) => setFilter(prev => ({ ...prev, type: e.target.value as any }))}
                >
                  {types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Status</span>
              <div className="flex gap-2">
                <select 
                  className="bg-gray-50 border-none outline-none text-sm px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
                  onChange={(e) => setFilter(prev => ({ ...prev, status: e.target.value as any }))}
                >
                  {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`text-[10px] uppercase tracking-widest px-3 py-1 bg-white/90 backdrop-blur font-bold ${
                    project.status === 'Sold Out' ? 'text-red-500' : 'text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white border border-white px-6 py-2 tracking-widest text-xs font-bold">VIEW DETAILS</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-1 group-hover:text-[#C5A059] transition-colors">{project.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">{project.location} — {project.type}</p>
                  <p className="text-sm text-gray-600 font-light line-clamp-2">{project.usp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-gray-50">
            <p className="text-gray-400">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

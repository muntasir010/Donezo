import { Plus } from 'lucide-react';

const projects = [
  { name: 'Develop API Endpoints', date: 'Nov 26, 2024', color: 'bg-blue-600' },
  { name: 'Onboarding Flow', date: 'Nov 28, 2024', color: 'bg-emerald-500' },
  { name: 'Build Dashboard', date: 'Nov 30, 2024', color: 'bg-orange-400' },
  { name: 'Optimize Page Load', date: 'Dec 5, 2024', color: 'bg-amber-500' },
  { name: 'Optimize Page Load', date: 'Dec 5, 2024', color: 'bg-amber-500' },
  { name: 'Optimize Page Load', date: 'Dec 5, 2024', color: 'bg-amber-500' },
  { name: 'Optimize Page Load', date: 'Dec 5, 2024', color: 'bg-amber-500' },
  { name: 'Cross-Browser Testing', date: 'Dec 6, 2024', color: 'bg-indigo-700' },
];

const ProjectList = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-800">Project</h3>
        <button className="text-[10px] border border-gray-200 px-3 py-1 rounded-full font-bold flex items-center gap-1">
          <Plus size={12} /> New
        </button>
      </div>
      <div className="space-y-6">
        {projects.map((proj, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-pointer">
            <div className={`w-8 h-8 ${proj.color} rounded-lg flex items-center justify-center text-white rotate-45 group-hover:rotate-0 transition-transform`}>
              <div className="-rotate-45 group-hover:rotate-0 transition-transform">✦</div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800">{proj.name}</h4>
              <p className="text-[10px] text-gray-400">Due date: {proj.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
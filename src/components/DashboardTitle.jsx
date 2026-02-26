import React from 'react';
import { Plus } from 'lucide-react';

const DashboardTitle = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      {/* Left Side: Title and Subtitle */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Dashboard</h1>
        <p className="text-gray-400 text-sm md:text-base">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>

      {/* Right Side: Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Add Project Button - Gradient Style */}
        <button className="flex items-center gap-2 bg-linear-to-r from-[#1a3a32] to-[#2d5a4c] text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-all shadow-md text-sm font-medium">
          <Plus size={18} />
          <span>Add Project</span>
        </button>

        {/* Import Data Button - Outline Style */}
        <button className="bg-white text-[#1a3a32] px-5 py-2.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-all text-sm font-medium shadow-sm">
          Import Data
        </button>
      </div>
    </div>
  );
};

export default DashboardTitle;
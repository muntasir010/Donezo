import { Pause, Square } from 'lucide-react';

const TimeTracker = () => {
  return (
    <div className="bg-[#0e2a22] p-6 rounded-2xl text-white relative overflow-hidden group max-w-72 min-h-52 flex flex-col justify-between shadow-lg">
      {/* Decorative background waves effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent scale-150"></div>
      
      <h3 className="text-lg font-medium relative z-10">Time Tracker</h3>
      
      <div className="text-center relative z-10 my-4">
        <span className="text-5xl font-bold tracking-widest font-mono">01:24:08</span>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 relative z-10">
        <button className="bg-white text-[#0e2a22] p-3 rounded-full hover:bg-gray-200 transition-colors">
          <Pause size={20} fill="currentColor" />
        </button>
        <button className="bg-[#e63946] text-white p-3 rounded-full hover:bg-red-600 transition-colors shadow-lg">
          <Square size={20} fill="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;
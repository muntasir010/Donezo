import React from 'react';
import { Video } from 'lucide-react';

const RemindersCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm flex flex-col justify-between h-full min-h-52">
      {/* Title */}
      <div>
        <h3 className="text-gray-800 font-bold text-lg mb-4">Reminders</h3>
        
        {/* Meeting Info */}
        <div className="space-y-1">
          <h4 className="text-[#1a3a32] text-xl font-bold leading-tight">
            Meeting with Arc Company
          </h4>
          <p className="text-gray-400 text-sm font-medium">
            Time : 02.00 pm - 04.00 pm
          </p>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full mt-6 bg-linear-to-r from-[#1a3a32] to-[#2d5a4c] text-white py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md group">
        <div className="bg-white/20 p-1 rounded-md">
           <Video size={18} className="text-white" />
        </div>
        <span className="font-semibold text-sm">Start Meeting</span>
      </button>
    </div>
  );
};

export default RemindersCard;
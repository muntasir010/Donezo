import React from 'react';
import { LayoutDashboard, ClipboardList, Calendar, PieChart, Users, Settings, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Tasks', icon: <ClipboardList size={20} />, path: '/tasks', badge: '12+' },
    { name: 'Calendar', icon: <Calendar size={20} />, path: '/calendar' },
    { name: 'Analytics', icon: <PieChart size={20} />, path: '/analytics' },
    { name: 'Team', icon: <Users size={20} />, path: '/team' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="w-64 bg-white h-screen flex flex-col p-6 border-r border-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-[#1a3a32] p-1.5 rounded-lg">
          <div className="w-4 h-4 border-2 border-white rounded-full"></div>
        </div>
        <span className="text-xl font-bold text-gray-800">Donezo</span>
      </div>

      {/* Menu Section */}
      <div className="flex-1">
        <p className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">Menu</p>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                location.pathname === item.path ? 'bg-[#f0f7ed] text-[#1a3a32] font-semibold' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </div>
              {item.badge && <span className="text-[10px] bg-[#1a3a32] text-white px-1.5 py-0.5 rounded-md">{item.badge}</span>}
            </div>
          ))}
        </div>

        {/* General Section */}
        <p className="text-xs font-semibold text-gray-400 mt-10 mb-4 uppercase tracking-wider">General</p>
        <div className="space-y-2 text-gray-500">
          <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer">
            <Settings size={20} /> <span className="text-sm">Settings</span>
          </div>
          <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer">
            <HelpCircle size={20} /> <span className="text-sm">Help</span>
          </div>
          <div onClick={handleLogout} className="flex items-center gap-3 p-3 hover:bg-red-50 text-red-400 rounded-xl cursor-pointer transition-colors">
            <LogOut size={20} /> <span className="text-sm font-medium">Logout</span>
          </div>
        </div>
      </div>

      {/* Mobile App Download Card */}
      <div className="bg-[#1a3a32] p-4 rounded-2xl text-white relative overflow-hidden mt-auto">
        <p className="text-xs font-medium mb-1">Download our Mobile App</p>
        <p className="text-[10px] opacity-60 mb-3">Get easy in another way</p>
        <button className="w-full py-2 bg-[#b8d4a6] text-[#1a3a32] text-xs font-bold rounded-lg">Download</button>
      </div>
    </div>
  );
};

export default Sidebar;
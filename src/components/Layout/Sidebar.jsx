import {
  LayoutDashboard,
  ClipboardList,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  ChartColumn,
  X, Users,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Tasks",
      icon: <ClipboardList size={20} />,
      path: "/tasks",
      badge: "12+",
    },
    { name: "Calendar", icon: <Calendar size={20} />, path: "/calendar" },
    { name: "Analytics", icon: <ChartColumn size={20} />, path: "/analytics" },
    { name: "Team", icon: <Users size={20} />, path: "/team" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-56 bg-white h-screen flex flex-col p-6 border-r border-gray-100">

      {/* Close Button */}
      <button 
        onClick={() => setIsSidebarOpen(false)}
        className="md:hidden absolute right-4 top-6 text-gray-500 hover:text-gray-800"
      >
        <X size={24} />
      </button>

      {/* Logo */}
      <div className=" flex items-center gap-2 mb-6">
        <div className="w-9 h-9 mt-2">
          <img src="/src/assets/logo.svg" alt="" />
        </div>
        <div>
          <p className="text-xl font-bold text-gray-800">Donezo</p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex-1">
        <p className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">
          Menu
        </p>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all ${
                location.pathname === item.path
                  ? "bg-[#1a3a32] text-white font-semibold"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] bg-[#1a3a32] text-white px-1.5 py-0.5 rounded-md">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* General Section */}
        <p className="text-xs font-semibold text-gray-400 mt-10 mb-4 uppercase tracking-wider">
          General
        </p>
        <div className="space-y-2 text-gray-500">
          <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-xl cursor-pointer">
            <Settings size={20} /> <span className="text-sm">Settings</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-xl cursor-pointer">
            <HelpCircle size={20} /> <span className="text-sm">Help</span>
          </div>
          <div
            onClick={handleLogout}
            className="flex items-center gap-2 p-2 hover:bg-red-50 text-red-400 rounded-xl cursor-pointer transition-colors"
          >
            <LogOut size={20} />{" "}
            <span className="text-sm font-medium">Logout</span>
          </div>
        </div>
      </div>

      {/* Mobile App Download Card */}
      <div className="bg-[#1a3a32] px-4 py-6 rounded-2xl text-white relative overflow-hidden mt-auto">
        <p className="text-xs font-medium mb-1">Download our Mobile App</p>
        <p className="text-[10px] opacity-60 mb-3">Get easy in another way</p>
        <button className="w-full py-3 bg-[#b8d4a6] text-[#1a3a32] text-xs font-bold rounded-lg">
          Download
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

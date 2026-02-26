import { useState } from "react";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import DashboardTitle from "../components/DashboardTitle";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-[#f8faf7]">
      {/* Fixed Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
      fixed md:relative z-40 transition-transform duration-300
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0
    `}
      >
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 px-3 md:px-6 py-2 overflow-y-auto">
        {/* Header (Search bar, User profile) */}
        <header className="mb-8">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </header>

        {/* Dashboard Title and Action Buttons */}
        <DashboardTitle/>

        {/* Total Projects, Ended Projects */}
        <div className="grid grid-cols-4 gap-6">
          {/* Stats Cards components go here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

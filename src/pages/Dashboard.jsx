import { useState } from "react";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import DashboardTitle from "../components/DashboardTitle";
import StatsCards from "../components/StatsCard";
import DashboardCharts from "../components/DashboardCharts";
import RemindersCard from "../components/RemindersCard";
import { TeamCollab } from "../components/TeamCollab";
import ProjectProgress from "../components/ProjectProgress";
import ProjectList from "../components/ProjectList";
import TimeTracker from "../components/TimeTracker";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f9fbf9]">
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative z-50 h-full w-64 transition-transform duration-300 transform
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 bg-white border-r border-gray-100
        `}
      >
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
      </aside>

      {/* Main Content*/}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="sticky top-0 z-40 w-full px-4 md:px-6 py-4 bg-[#f9fbf9]/80 backdrop-blur-md border-b border-gray-50">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            
            {/* Dashboard Title & Stats */}
            <DashboardTitle />
            <StatsCards />

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              
              {/* Left & Middle Columns */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DashboardCharts />
                  <RemindersCard />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TeamCollab />
                  <ProjectProgress />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                <ProjectList />
                <TimeTracker />
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
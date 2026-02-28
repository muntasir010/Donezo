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
    <div className="flex min-h-screen">
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
      <main className="flex-1 md:px-6 py-2 overflow-y-auto">
        {/* Header (Search bar, User profile) */}
        <header className="mb-8">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </header>

        {/* Total Projects, Ended Projects */}
        <div className="bg-gray-100 p-4 rounded-xl gap-6">
          {/* Dashboard Title and Action Buttons */}
          <DashboardTitle />
          {/* Stats Cards components go here */}
          <StatsCards />
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DashboardCharts />
                <RemindersCard />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
                <TeamCollab />
                <ProjectProgress />
              </div>
            </div>
            <div className=" gap-6 my-6">
              <ProjectList />
              <TimeTracker />
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {/* Column 1: Analytics (div 1) & Team (div 2) */}
            <div className="flex flex-col gap-6">
              <DashboardCharts /> {/* div 1 */}
              <TeamCollab /> {/* div 2 */}
            </div>

            {/* Column 2: Reminders (div 1) & Progress (div 2) */}
            <div className="flex flex-col gap-6">
              <RemindersCard /> {/* div 1 */}
              <ProjectProgress /> {/* div 2 */}
            </div>

            {/* Column 3: Project List (div 3 Large) & Time Tracker (div 3 Small) */}
            <div className="flex flex-col gap-6 h-full">
              <ProjectList /> {/* div 3 - Large */}
              <TimeTracker /> {/* div 3 - Small */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

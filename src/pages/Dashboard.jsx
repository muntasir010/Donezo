import Sidebar from "../components/Layout/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#f8faf7]">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header (Search bar, User profile) */}
        <header className="flex justify-between items-center mb-8">
            <div className="bg-white px-4 py-2 rounded-full border border-gray-100 flex items-center gap-2 w-96">
                <span className="text-gray-400 italic font-serif">Q</span>
                <input type="text" placeholder="Search task" className="bg-transparent outline-none w-full text-sm" />
            </div>
            {/* User Profile Section (Add profile image here) */}
        </header>

        <h1 className="text-3xl font-serif text-gray-800">Dashboard</h1>
        <p className="text-gray-400 text-sm mb-8">Plan, prioritize, and accomplish your tasks with ease.</p>

        {/* Total Projects, Ended Projects */}
        <div className="grid grid-cols-4 gap-6">
            {/* Stats Cards components go here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
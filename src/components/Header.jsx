import { Mail, Bell, Search, Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between bg-white/70 backdrop-blur-md px-4 md:px-6 py-3 rounded-2xl border border-gray-100 shadow-sm mb-6 sticky top-0 z-30">
      
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar} 
        className="p-2 mr-2 md:hidden text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <Menu size={24} />
      </button>

      {/* Search Bar*/}
      <div className="flex items-center bg-white px-3 md:px-4 py-2 rounded-full flex-1 max-w-36 md:max-w-md border border-gray-100">
        <span className="text-gray-400 mr-2">
          <Search size={18} />
        </span>
        <input 
          type="text" 
          placeholder="Search task" 
          className="bg-transparent outline-none w-full text-xs md:text-sm text-gray-600 placeholder:text-gray-400"
        />
        {/* Shortcut Key*/}
        <div className="hidden md:flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded text-[10px] text-gray-500 font-medium ml-2">
          <span>⌘</span>
          <span>F</span>
        </div>
      </div>

      {/* Right Side: Icons & Profile */}
      <div className="flex items-center gap-2 md:gap-4 ml-4">
        
        {/* Icons */}
        <button className="hidden sm:flex p-2 md:p-2.5 bg-white rounded-full border border-gray-50 hover:bg-gray-50 transition-colors text-gray-600">
          <Mail size={18} className="md:w-5 md:h-5" />
        </button>

        <button className="p-2 md:p-2.5 bg-white rounded-full border border-gray-50 hover:bg-gray-50 transition-colors text-gray-600 relative">
          <Bell size={18} className="md:w-5 md:h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-pink-100 border border-white shadow-sm shrink-0">
            <img 
              src="https://i.ibb.co.com/zWjwgLsH/db40c047-22e9-48cc-9f0b-3832ff87e92e.jpg" 
              alt="Admin Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Hide Name and Email for Mobile Device*/}
          <div className="hidden lg:flex flex-col text-left">
            <span className="text-sm font-bold text-gray-800 leading-tight">Totok Michael</span>
            <span className="text-[10px] md:text-[11px] text-gray-400">tmichael20@mail.com</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
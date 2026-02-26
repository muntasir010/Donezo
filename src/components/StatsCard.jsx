import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const apiUrl = import.meta.env.VITE_API_URL;

const StatsCards = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${apiUrl}/overview`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching overview data:", error);
      }
    };
    fetchStats();
  }, []);

  const cardData = [
    { 
      title: 'Total Users', 
      value: stats?.totalUsers?.toLocaleString() || '0', 
      desc: 'Increased from last month', 
      isDark: true,
      growth: '15%'
    },
    { 
      title: 'Active Users', 
      value: stats?.activeUsers?.toLocaleString() || '0', 
      desc: 'Currently online', 
      isDark: false,
      growth: '8%'
    },
    { 
      title: 'Total Revenue', 
      value: `$${stats?.revenue?.toLocaleString() || '0'}`, 
      desc: 'Overall earnings', 
      isDark: false,
      growth: '12%'
    },
    { 
      title: 'Growth Rate', 
      value: `${stats?.growth || '0'}%`, 
      desc: 'Business expansion', 
      isDark: false,
      growth: null
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cardData.map((card, index) => (
        <div 
          key={index}
          className={`p-6 rounded-[2.5rem] shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
            card.isDark ? 'bg-linear-to-r from-[#2c6c3e] to-[#1b6442] text-white' : 'bg-white text-gray-800 border border-gray-100'
          }`}
        >
          {/* Top Section */}
          <div className="flex justify-between items-start mb-6">
            <span className={`text-sm font-medium ${card.isDark ? 'text-gray-300' : 'text-gray-500'}`}>
              {card.title}
            </span>
            <div className={`p-2 rounded-full border ${card.isDark ? 'border-white/20' : 'border-gray-100'}`}>
              <ArrowUpRight size={16} />
            </div>
          </div>

          {/* Value Section */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight">{card.value}</h2>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center gap-2">
            {card.growth && (
              <div className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold ${
                card.isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-[#f0f7ed] text-[#1a3a32]'
              }`}>
                <TrendingUp size={10} /> {card.growth}
              </div>
            )}
            <span className="text-[11px] text-gray-400 font-medium">
              {card.desc}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
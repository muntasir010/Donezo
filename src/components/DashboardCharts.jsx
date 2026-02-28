import React, { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const DashboardCharts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${apiUrl}/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (error) {
        console.error("Data fetch error:", error);
      }
    };
    fetchDashboardData();
  }, []);

  return (
    // Bar Chart Container
    <div className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Project Analytics</h3>
      </div>
      <div className="flex items-end justify-between h-48 max-w-xs gap-3 px-2">
        {data?.analytics?.map((item, index) => {
          const maxViews = Math.max(...data.analytics.map((a) => a.views));
          const barHeight = (item.views / maxViews) * 100;

          return (
            <div
              key={index}
              className="flex flex-col items-center flex-1 group relative h-full justify-end"
            >
              {/* Tooltip on Hover */}
              <div className="absolute -top-10 bg-[#1a3a32] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                {item.views} Views
              </div>

              {/* Bar with Stripes Pattern */}
              <div
                className={`w-full rounded-full transition-all duration-700 ${
                  index % 2 === 0 ? "bg-[#d1e2c4] opacity-80" : "bg-[#1a3a32]"
                } ${index === 2 ? "bg-[#4fb286]" : ""}`}
                style={{ height: `${barHeight}%` }}
              ></div>

              {/* Day Label */}
              <span className="text-xs text-gray-400 mt-4 font-medium">
                {["S", "M", "T", "W", "T"][index]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardCharts;

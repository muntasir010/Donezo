import axios from "axios";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export const TeamCollab = () => {
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
    <div className="bg-white p-6 rounded-[2.5rem] border border-gray-50 shadow-sm">
      {" "}
      <div className="flex justify-between items-center mb-6">
        {" "}
        <h3 className="font-bold text-gray-800">Team Collaboration</h3>{" "}
        <button className="text-[#1a3a32] border border-gray-200 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          {" "}
          <Plus size={14} /> Add Member{" "}
        </button>{" "}
      </div>{" "}
      <div className="space-y-4">
        {" "}
        {data?.users?.slice(0, 4).map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between group cursor-pointer"
          >
            {" "}
            <div className="flex items-center gap-3">
              {" "}
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                className="w-10 h-10 rounded-full bg-gray-100 border border-white"
                alt={user.name}
              />{" "}
              <div>
                {" "}
                <h4 className="text-sm font-bold text-gray-800">
                  {" "}
                  {user.name}{" "}
                </h4>{" "}
                <p className="text-[10px] text-gray-400 truncate w-32">
                  {" "}
                  {user.email}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <span
              className={`text-[10px] px-2 py-1 rounded-md font-bold ${user.status === "active" ? "bg-[#f0f7ed] text-[#1a3a32]" : "bg-orange-50 text-orange-500"}`}
            >
              {" "}
              {user.status === "active" ? "In Progress" : "Pending"}{" "}
            </span>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

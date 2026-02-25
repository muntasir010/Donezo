/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const api = import.meta.env.VITE_API_URL;

const LoginPage = () => {
  const [email, setEmail] = useState('user1@example.com');
  const [password, setPassword] = useState('password123');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api}/login`, {
        email,
        password
      });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      }
    } catch (error) {
      alert("Login failed! Please check credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A5F3F] font-sans relative overflow-hidden">
      {/* Background Decorative Pattern*/}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%"><pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="green" strokeWidth="1" fill="none"/></pattern><rect width="100%" height="100%" fill="url(#pattern)"/></svg>
      </div>

      <div className="max-w-4xl p-4 w-full grid md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left Side: Welcome Text */}
        <div>
          <div className="flex items-center gap-2  mb-6">
            <span className="text-2xl font-bold italic">Donezo</span>
          </div>
          <h1 className="text-4xl md:text-5xl  ml-6 font-serif mb-4 leading-tight">Welcome Back, Administrator!</h1>
        </div>

        {/* Right Side: Login Form */}
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Login to your admin panel</h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
              <input 
                type="email" 
                className="w-full p-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-green-200 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full p-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-green-200 transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute right-3 top-10 cursor-pointer text-gray-400">👁️</span>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="rounded text-green-600" />
              <label htmlFor="remember" className="text-sm text-gray-500">Remember me</label>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-[#b8d4a6] hover:bg-[#a5c392] text-[#1a3a32] font-bold rounded-lg transition"
            >
              LOGIN
            </button>
          </form>

          <p className="text-center mt-6 text-xs font-bold text-gray-400 cursor-pointer hover:text-gray-600 transition">
            FORGOT YOUR PASSWORD?
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
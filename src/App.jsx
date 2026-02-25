import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import LoginPage from "./pages/Login";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginPage />} />
        {/* Dashboard */}
        <Route 
          path="/dashboard" 
          element={
              <Dashboard />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FaBars } from 'react-icons/fa';
import './dashboard.css';

function Dashboard() {
  const { name } = useParams();  
  const [fullName, setFullName] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) {
      setFullName(user.name);
    } else {
      setFullName(name);
    }
  }, [name]);


  


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <Sidebar
        fullName={fullName}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="dashboard-content">
        <Outlet /> {/* Render nested routes here */}
      </div>
    </div>
  );
}

export default Dashboard;

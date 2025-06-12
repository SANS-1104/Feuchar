import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { FaBars } from 'react-icons/fa';
import '../Student/Dashboard/dashboard.css';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <AdminSidebar
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

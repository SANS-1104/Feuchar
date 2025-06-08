import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FaBars } from 'react-icons/fa';
import './dashboard.css';
import Overview from './Overview';
import ExploreCourse from './ExploreCourse';
import MyCourse from './MyCourse';
import Message from './Message';




function Dashboard() {
  const { username } = useParams();
  const [activePage, setActivePage] = useState('Overview');
  const [firstName, setFirstName] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem('firstName');
    setFirstName(storedName || username);
  }, [username]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Overview': return <Overview firstName={firstName}/>;
      case 'ExploreCourse': return <ExploreCourse />;
      case 'MyCourse': return <MyCourse />;
      case 'Message': return <Message />;
      default: return <Overview />;
    }
  };

  return (
    <div className="dashboard-container">
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <Sidebar 
        setActivePage={setActivePage} 
        activePage={activePage} 
        sidebarOpen = {sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="dashboard-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default Dashboard;

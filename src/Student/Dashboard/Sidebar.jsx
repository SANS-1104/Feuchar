import React from 'react';
import './dashboard.css';
import { FaThLarge,FaSearch, FaPlayCircle , FaRegCommentDots , FaCog , FaSignOutAlt  } from "react-icons/fa";


function Sidebar({ setActivePage, activePage, sidebarOpen, setSidebarOpen }) {
  const handleLinkClick = (page) => {
    setActivePage(page);
    setSidebarOpen(false); 
  };


  return (
    <div className={`Dashboardsidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="Dasboardsidebar-upper">
        <div className="Dashboardsidebar-icon">
          <img src='/images/navLogo3.jpg' alt="Logo" className='logo'/>
        </div>
        <ul className="Dashboardsidebar-menu">
          <li className={activePage === 'Overview' ? 'active' : ''}
            onClick={() => setActivePage('Overview')}>
            <FaThLarge className='icon' style={{fontSize:20}} /> Overview</li>
          <li className={activePage === 'ExploreCourse' ? 'active' : ''}
            onClick={() => setActivePage('ExploreCourse')}>
            <FaSearch className='icon' style={{fontSize:20}} /> Explore Courses</li>
          <li className={activePage === 'MyCourse' ? 'active' : ''}
            onClick={() => setActivePage('MyCourse')}>
            <FaPlayCircle className='icon' style={{fontSize:20}} /> My Courses</li>
          <li className={activePage === 'Message' ? 'active' : ''}
            onClick={() => setActivePage('Message')}>
            <FaRegCommentDots className='icon' style={{fontSize:20}} /> Message</li>
        </ul>
      </div>

      <div className="Dasboardsidebar-lower">
        <div className="setting-title">SETTINGS</div>
        <div className="setting-option"><a href="#"><FaCog />&nbsp; Settings</a></div>
        <div className="logout"><a href="/"><FaSignOutAlt />&nbsp; Logout</a></div>
      </div>
    </div>
  );
}


export default Sidebar;

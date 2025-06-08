import './dashboard.css';
import {
  FaThLarge, FaSearch, FaPlayCircle, FaRegCommentDots, FaCog, FaSignOutAlt, FaUser
} from "react-icons/fa";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import axiosClient from '../../api/axiosClient';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const { name } = useParams(); // username from URL

  const handleLogout = async () => {
    try {
      await axiosClient.post("/logout");
      toast.success("Logged out successfully.");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className={`Dashboardsidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="Dasboardsidebar-upper">
        <div className="Dashboardsidebar-icon">
          <a href="/">
            <img src='/images/navLogo3.jpg' alt="Logo" className='logo' />
          </a>
        </div>

        <ul className="Dashboardsidebar-menu">
          <li>
            <NavLink to={`/dashboard/${name}/overview`} className={({ isActive }) => isActive ? 'active' : ''}>
              <FaThLarge className='icon' style={{ fontSize: 20 }} /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/${name}/explorecourse`} className={({ isActive }) => isActive ? 'active' : ''}>
              <FaSearch className='icon' style={{ fontSize: 20 }} /> Explore Courses
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/${name}/mycourse`} className={({ isActive }) => isActive ? 'active' : ''}>
              <FaPlayCircle className='icon' style={{ fontSize: 20 }} /> My Courses
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/${name}/message`} className={({ isActive }) => isActive ? 'active' : ''}>
              <FaRegCommentDots className='icon' style={{ fontSize: 20 }} /> Message
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/${name}/updateprofile`} className={({ isActive }) => isActive ? 'active' : ''}>
              <FaUser className='icon' style={{ fontSize: 20 }} /> Update Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="Dasboardsidebar-lower">
        <div className="setting-title">SETTINGS</div>
        <div className="setting-option"><a href="#"><FaCog />&nbsp; Settings</a></div>
        <button className="logout" onClick={handleLogout}>
          <FaSignOutAlt />&nbsp; Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

import '../Student/Dashboard/dashboard.css';
import {  FaThLarge, FaSearch, FaPlayCircle, FaRegCommentDots, FaCog, FaSignOutAlt, FaUser} from "react-icons/fa";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import axiosClient from '../api/axiosClient';


function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

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
            <NavLink to={`/admin-dashboard/dash`} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setSidebarOpen(false)} >
              <FaThLarge className='icon'/> Admin Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={`/admin-dashboard/studentDet`} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setSidebarOpen(false)} >
              <FaThLarge className='icon'/> Student Details
            </NavLink>
          </li>
          <li>
            <NavLink to={`/admin-dashboard/courseDet`} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setSidebarOpen(false)} >
              <FaSearch className='icon'/> Course Details
            </NavLink>
          </li>
          <li>
            <NavLink to={`/admin-dashboard/webinarDet`} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setSidebarOpen(false)} >
              <FaPlayCircle className='icon'/> Webinar Details
            </NavLink>
          </li>         
        </ul>
      </div>

      <div className="Dasboardsidebar-lower">
        <button className="logout" onClick={handleLogout}>
          <FaSignOutAlt />&nbsp; Logout
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;

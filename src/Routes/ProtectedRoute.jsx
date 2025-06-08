import React, { useEffect } from 'react';
import { Navigate, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");
  let user = null;

  try {
    user = JSON.parse(userString);
  } catch (e) {
    console.error("Failed to parse user from localStorage", e);
  }

  const { name } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      toast.warning("Please login first");
    } 
    // else if (name && user?.name && name !== user.name) {
    //   toast.error("Access denied to another user's dashboard");
    // }
  }, [token, user, name, location.pathname]);

  if (!token || !user || !user.name) {
    return <Navigate to="/" replace />;
  }

  if (name !== user.name) {
    return <Navigate to={`/dashboard/${user.name}/overview`} replace />;
  }

  return children;
};

export default ProtectedRoute;

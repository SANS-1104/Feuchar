// src/Components/MainNavbar.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

export default function MainNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    // Listen to login/logout changes
    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  return isLoggedIn ? <Navbar2 /> : <Navbar />;
}

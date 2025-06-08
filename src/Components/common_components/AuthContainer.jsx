import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgetPass from "./ForgetPass";

const AuthContainer = () => {
  const location = useLocation();

  // Read ?view=signup from URL
  const queryParams = new URLSearchParams(location.search);
  const initialView = queryParams.get("view") || "login";

  const [authView, setAuthView] = useState(initialView);

  // Optional: update state if URL changes
  useEffect(() => {
    const newView = queryParams.get("view") || "login";
    setAuthView(newView);
  }, [location.search]);

  const switchToLogin = () => setAuthView("login");
  const switchToSignup = () => setAuthView("signup");
  const switchToForgot = () => setAuthView("forgot");

  return (
    <div>
      {authView === "login" && (
        <Login onSignup={switchToSignup} onForgot={switchToForgot} />
      )}
      {authView === "signup" && <SignUp onLogin={switchToLogin} />}
      {authView === "forgot" && (
        <ForgetPass onSignup={switchToSignup} onLogin={switchToLogin} />
      )}
    </div>
  );
};

export default AuthContainer;

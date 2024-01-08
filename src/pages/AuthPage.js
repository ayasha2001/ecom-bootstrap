import React, { useContext, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AuthPage = () => {
  const context = useContext(AuthContext);

  // Use the Navigate component directly in the component body
  if (context.isLoggedIn) {
    return <Navigate to="/store" />;
  }

  return <AuthForm />;
};

export default AuthPage;

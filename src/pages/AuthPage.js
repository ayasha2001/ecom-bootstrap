import React from "react";
import AuthForm from "../components/AuthForm";
import AuthContextProvider from "../context/AuthContextProvider";

const AuthPage = () => {
  return (
    <AuthContextProvider>
      <AuthForm />
    </AuthContextProvider>
  );
};

export default AuthPage;

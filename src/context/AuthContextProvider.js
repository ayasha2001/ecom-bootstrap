import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const storedToken = localStorage.getItem("user_token");
    if (storedToken) {
      setToken(JSON.parse(storedToken));
      setIsLogin(true);
    }
    setLoading(false)
  }, []);

  const loginUser = (token) => {
    localStorage.setItem("user_token", JSON.stringify(token));
    setIsLogin(true);
    setToken(token);
  };
  const logoutUser = () => {
    localStorage.removeItem("user_token");
    setIsLogin(false);
    setToken("");
  };

  const cntxt = {
    token: token,
    isLoggedIn: isLoggedIn,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={cntxt}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

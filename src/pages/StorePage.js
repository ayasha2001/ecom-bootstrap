import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import ContainerComp from "../components/ContainerComp";
import AuthContext from "../context/AuthContext";

const StorePage = () => {
  const cntxt = useContext(AuthContext);
  if(!cntxt.isLoggedIn){
    return <Navigate to="/auth"/>
  }
  return (
    <ContainerComp />
  );
};

export default StorePage;

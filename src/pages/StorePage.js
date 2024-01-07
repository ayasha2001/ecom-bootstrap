import React from "react";
import Product from "../components/Product"
import ContainerComp from "../components/ContainerComp";

const StorePage = () => {
  return (
    <ContainerComp element={<Product/>}/>
  );
};

export default StorePage;

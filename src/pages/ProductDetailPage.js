import React from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "../components/ContainerComp";
import { Card } from "react-bootstrap";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const prod = productsArr.find((item) => {
    console.log(productId, item.id);
    if (item.id == productId) return item;
  });

  console.log(prod);

  return (
    <Card className="mt-2 mb-2 p-2" style={{ width: "60%", margin: "auto" }}>
      <img src={prod.imageUrl} className="mt-2 mb-2 p-2" />
      <h2>{prod.title}</h2>
      <p>{prod.review}</p>
    </Card>
  );
};

export default ProductDetailPage;

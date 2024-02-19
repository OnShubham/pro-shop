import React from "react";
import products from "../products";
import { useParams } from "react-router-dom";

function ProductsScreen({ match }) {
  const { id } = useParams(); // Destructure id from useParams()

  const product = products.find((p) => p._id === id);

  return (
    <div>
      {product.name}
      {product.description}
    </div>
  );
}

export default ProductsScreen;

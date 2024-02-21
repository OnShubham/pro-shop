import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    // Product Card
    <Card className="my-3 p-3 rounded bg-danger">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      {/* Product Name */}

      <Card.Body className="text-black">
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        {/* Product Rating */}
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        {/* Product Price  */}
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;

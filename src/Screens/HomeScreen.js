import React from "react";
import { Row, Col } from "react-bootstrap";

import products from "../products";
import Product from "../Components/Product";

function HomeScreen() {
  return (
    <div>
      <h1>Welcome to ProShop</h1>

      <Row>
        <h1>Latest Products </h1>

        <Row>
          {/* This is the Product component */}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              {/* <h5>{product.name}</h5> */}

              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
}

export default HomeScreen;

import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import products from "../products";
import Product from "../Components/Product";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="d-flex justify-content-center p-3 bg-info bg-opacity-10  rounded-end">
        Welcome to ProShop
      </h1>

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

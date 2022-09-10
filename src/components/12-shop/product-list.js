import React from "react";
import { Col, Container, Row } from "reactstrap";
import Product from "./product";
import products from "./products.json";

const ProductList = () => {
  return (
    <Container className="my-3">
      <Row xs={2} s={3} md={4} xl={6} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Product
              image={product.image}
              title={product.title}
              desc={product.desc}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;

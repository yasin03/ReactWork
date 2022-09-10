import React from "react";
import { Alert, Col, Container, Row } from "reactstrap";

const BootstrapDynamic = () => {
  const open = true;
  return (
    <div>
      <Container>
        <Row>
          <Col md={4} xl={3} xxl={2}>
            Cell 1
          </Col>
          <Col md={4} xl={3} xxl={2}>
            Cell 2
          </Col>
          <Col md={4} xl={3} xxl={2}>
            Cell 3
          </Col>
          <Col md={4} xl={3} xxl={2}>
            Cell 4
          </Col>
          <Col md={4} xl={3} xxl={2}>
            Cell 5
          </Col>
          <Col md={4} xl={3} xxl={2}>
            Cell 6
          </Col>
        </Row>
      </Container>
      <Alert color="warning" isOpen={open}>
        Hey! pay attention!
      </Alert>
    </div>
  );
};

export default BootstrapDynamic;

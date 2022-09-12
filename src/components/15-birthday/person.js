import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { VscTrash } from "react-icons/vsc";

const Person = (props) => {
  const { id, name, image, age, deletePerson } = props;

  return (
    <div>
      <Card className="p-2 my-3">
        <Row>
          <Col sm={4}>
            <CardImg src={require(`./people/${image}`)} />
          </Col>
          <Col sm={6}>
            <CardBody>
              <CardTitle tag="h2">{name}</CardTitle>
              <CardText>{age}</CardText>
              <VscTrash
                onClick={() => deletePerson(id)}
                style={{
                  fontSize: "25px",
                  position: "absolute",
                  right: 15,
                  bottom: 15,
                  cursor: "pointer",
                }}
              />
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Person;

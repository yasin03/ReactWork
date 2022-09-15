import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import UserCard from "./user-card";

const UserCards = () => {
  let [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://63209402e3bdd81d8efd9b91.mockapi.io/api/v1/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5 text-center">
      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner color="primary">Loading...</Spinner>
        </div>
      )}

      <Row className="gap-2">
        {users.map((user) => (
          <Col sm={6} md={4} lg={3} key={user.id}>
            <UserCard {...user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserCards;

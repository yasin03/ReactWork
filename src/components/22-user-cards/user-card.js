import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const UserCard = (props) => {
  const { firstName, lastName, avatar, email } = props;
  return (
    <Card style={{ width: "200px" }} className="h-100">
      <img
        alt={`${firstName} ${lastName}`}
        src={avatar}
        style={{ height: "100px", width: "100%" }}
      />
      <CardBody>
        <CardTitle tag="h5">{`${firstName} ${lastName}`}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {email}
        </CardSubtitle>
        <Button>Details</Button>
      </CardBody>
    </Card>
  );
};

export default UserCard;

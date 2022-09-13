import React, { useState } from "react";
import { Button, Card, CardBody, Container } from "reactstrap";

const RandomImages = () => {
  const [randomNum, setRandomNum] = useState(1);

  const handleRandomNum = () => {
    // Math.random() * (max-min+1)+min
    const rand = Math.floor(Math.random() * 10 + 1);
    //const rand = Math.floor(Math.random() * 6 + 1);
    setRandomNum(rand);
  };

  //let image = `image${randomNum}.jpg`;

  let image = "image1.jpg";
  if (randomNum >= 8) {
    image = "image3.jpg";
  } else if (randomNum >= 4) {
    image = "image2.jpg";
  }

  return (
    <Container className="mt-5">
      <Card>
        <img alt="Sample" src={require(`../../assets/img/${image}`)} />
        <CardBody>
          <Button onClick={handleRandomNum}>Change</Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default RandomImages;

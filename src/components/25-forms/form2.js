import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";

const Form2 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Container className="mt-5">
      <Form>
        <FormGroup>
          <Label>İsim</Label>
          <Input
            type="text"
            placeholder="Adınızı Giriniz"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Soyisim</Label>
          <Input
            type="text"
            placeholder="Soyadınızı Giriniz"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            placeholder="Soyadınızı Giriniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone</Label>
          <Input
            type="text"
            placeholder="Soyadınızı Giriniz"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Form2;

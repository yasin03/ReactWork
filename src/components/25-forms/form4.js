import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Form4 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container className="mt-5">
      <Form>
        <FormGroup>
          <Label>İsim</Label>
          <Input
            name="firstName"
            type="text"
            placeholder="Adınızı Giriniz"
            value={formData.firstName}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Soyisim</Label>
          <Input
            name="lastName"
            type="text"
            placeholder="Soyadınızı Giriniz"
            value={formData.lastName}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            name="email"
            type="text"
            placeholder="Email Adresinizi Giriniz"
            value={formData.email}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone</Label>
          <Input
            name="phone"
            type="text"
            placeholder="Telefon Numaranızı Giriniz"
            value={formData.phone}
            onChange={handleFormData}
          />
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Form4;

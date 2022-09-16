import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import * as Yup from "yup";
const Form6 = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Adınızı Giriniz")
      .min(3, "Geçerli bir ad giriniz"),
    lastName: Yup.string()
      .required("Soyadınızı Giriniz")
      .min(3, "Geçerli bir soyaad giriniz"),
    email: Yup.string()
      .email("Geçerli bir email giriniz")
      .required("E-posta adresinizi giriniz."),
    phone: Yup.string()
      .required("Telefon numaranızı giriniz")
      .matches(
        /\(\d{3}\) \d{3} \d{2} \d{2}$/,
        "(xxx) xxx xx xx formatında giriniz"
      ),
  });

  const onSubmit = (values) => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="mt-5">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label>İsim</Label>
          <Input
            {...formik.getFieldProps("firstName")}
            type="text"
            placeholder="Adınızı Giriniz"
            invalid={formik.errors.firstName && formik.touched.firstName}
          />
          <FormFeedback>{formik.errors.firstName}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Soyisim</Label>
          <Input
            name="lastName"
            type="text"
            onBlur={formik.handleBlur("lastName")}
            placeholder="Soyadınızı Giriniz"
            value={formik.values.lastName}
            onChange={formik.handleChange("lastName")}
            invalid={formik.errors.lastName && formik.touched.lastName}
          />
          <FormFeedback>{formik.errors.lastName}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            name="email"
            type="text"
            onBlur={formik.handleBlur("email")}
            placeholder="Email Adresinizi Giriniz"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            invalid={formik.errors.email && formik.touched.email}
          />
          <FormFeedback>{formik.errors.email}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Phone</Label>
          <Input
            name="phone"
            type="text"
            onBlur={formik.handleBlur("phone")}
            placeholder="Telefon Numaranızı Giriniz"
            value={formik.values.phone}
            onChange={formik.handleChange("phone")}
            invalid={formik.errors.phone && formik.touched.phone}
          />
          <FormFeedback>{formik.errors.phone}</FormFeedback>
        </FormGroup>
        <Button
          color="info"
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Form6;

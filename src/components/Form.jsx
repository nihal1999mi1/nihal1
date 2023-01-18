import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { FormSchema } from "../schema";
import Table from "./Table";
const App = () => {
  const [data, setData] = useState([]);
  const initialValues = {
    name: "",
    email: "",
    gender: "",
  };
  console.log(data);
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleReset,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      try {
        setData((prev) => [...prev, values]);
      } catch (error) {
        console.log(error);
      } finally {
        handleReset()
      }
    },
  });
  return (
    <div className="container my-5 w-50">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Name</Form.Label>
          <Form.Control
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />

          {errors.name && touched.name ? (
            <Form.Text className="text-danger">{errors.name}</Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <Form.Text className="text-danger">{errors.email}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Select Gender</Form.Label>
          <Form.Select
            onChange={handleChange}
            name="gender"
            onBlur={handleBlur}
            value={values.gender}
            aria-label="Select Gender"
          >
            <option> Select a Option</option>
            <option value="Male">Male</option>
            <option value="Female">FEMALE</option>
          </Form.Select>

          {errors.gender && touched.gender ? (
            <Form.Text className="text-danger">{errors.gender}</Form.Text>
          ) : null}
        </Form.Group>
        <Button variant="primary" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
      <Table data={data} />
    </div>
  );
};

export default App;

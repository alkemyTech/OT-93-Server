/* eslint-disable no-alert */
import React from 'react';
import '../../css/FormStyles.css';
import { useFormik } from 'formik';
import { Container, Row, Col } from 'reactstrap';

const TestimonialForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      description: '',
    },
    onSubmit: (values) => {
      alert(values.name);
    },
  });

  return (
    <Container>
      <Row>
        <Col>
          <form className="form-container" onSubmit={formik.handleSubmit}>
            <input
              className="input-field"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Testimonial Title"
            />
            <input
              className="input-field"
              type="text"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              placeholder="Testimonial description"
            />
            <button className="submit-btn" type="submit">
              Send
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialForm;

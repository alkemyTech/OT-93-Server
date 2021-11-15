/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import { useFormik } from 'formik';
import React from 'react';
import { Row, Col, Input, InputGroup, Button, Form } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { SUBSCRIBE, REQUIRED } from '../../utils/constants';
import { subscribeNewsLetterRequested } from '../../core/state/Session/actions';

const index = () => {
  const Dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = REQUIRED;
    }
    return errors;
  };

  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (payload, { resetForm }) => {
      Dispatch(subscribeNewsLetterRequested({ payload }));
      resetForm();
    },
  });

  return (
    <Row className="justify-content-center mt-3">
      <Col lg={10}>
        <Form onSubmit={Formik.handleSubmit}>
          <InputGroup>
            <Input
              placeholder="email@gmail.com"
              name="email"
              type="email"
              onChange={Formik.handleChange}
              value={Formik.values.email}
            />
            <Button type="submit" color="success">
              {SUBSCRIBE}
            </Button>
          </InputGroup>
          {Formik.errors.email ? <div>{Formik.errors.email}</div> : null}
        </Form>
      </Col>
    </Row>
  );
};

export default index;

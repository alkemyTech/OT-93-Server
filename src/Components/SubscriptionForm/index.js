import { useFormik } from 'formik';
import React from 'react';
import {
  Row, Col, Input, InputGroup, Button, Form,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { SUBSCRIBE, REQUIRED, NO_LOGGED } from '../../utils/constants';
import { subscribeNewsLetterRequested } from '../../core/state/Session/actions';
import { authUser } from '../../utils/index';

const index = () => {
  const Dispatch = useDispatch();
  const userAuthenticated = authUser();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = REQUIRED;
    }
    if (!userAuthenticated) {
      errors.email = NO_LOGGED;
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
    <Row className="justify-content-center mt-4 mb-3">
      <Col lg={8}>
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

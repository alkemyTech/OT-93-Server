/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Col, Row, Container } from 'reactstrap';
import BackForm from '../../../Components/BackForm';
import { REQUIRED } from '../../../utils/constants';

const Component = ({
  title,
  form,
  fields,
  submitCategoriesRequested,
  fetchCategoriesRequested,
  match,
  history: { push },
}) => {
  const goBackToList = () => push('/');
  const validate = (values) => {
    const errors = {};
    if (!values.name || !values.image) {
      errors.name = REQUIRED;
      errors.image = REQUIRED;
    }
    return errors;
  };

  const id = match.params.id;

  useEffect(() => {
    fetchCategoriesRequested({ id });
  }, [fetchCategoriesRequested]);

  return (
    <Container>
    <Row>
      <Col>
        <h1 className="text-center mb-4">Categoría</h1>
        <BackForm
          key="NewsForm"
          form={form}
          fields={fields}
          submit={submitCategoriesRequested}
          fetch={fetchCategoriesRequested}
          id={id}
          goBack={goBackToList}
          validate={validate}
        />
      </Col>
    </Row>
    </Container>
  );
};

export default Component;

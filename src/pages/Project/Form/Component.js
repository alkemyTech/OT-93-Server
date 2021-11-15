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
  submitProjectsRequested,
  fetchProjectsRequested,
  match,
  history: { push },
}) => {
  const goBackToList = () => push('/');
  const validate = (values) => {
    const errors = {};
    if (!values.due_date || !values.title || !values.image) {
      errors.due_date = REQUIRED;
      errors.title = REQUIRED;
      errors.image = REQUIRED;
    }
    return errors;
  };

  const id = match.params.id;

  useEffect(() => {
    fetchProjectsRequested({ id });
  }, [fetchProjectsRequested]);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mb-4">{title}</h1>
          <BackForm
            key="NewsForm"
            form={form}
            fields={fields}
            submit={submitProjectsRequested}
            fetch={fetchProjectsRequested}
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

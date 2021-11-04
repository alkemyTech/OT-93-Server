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
  submitActivitiesRequested,
  fetchActivitiesRequested,
  match,
  history: { push },
}) => {
  const goBackToList = () => push('/');
  const validate = (values) => {
    const errors = {};
    if (!values.name || !values.image || !values.description) {
      errors.name = REQUIRED;
      errors.image = REQUIRED;
      errors.description = REQUIRED;
    }
    return errors;
  };

  const id = match.params.id;

  useEffect(() => {
    fetchActivitiesRequested({ id });
  }, [fetchActivitiesRequested]);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mb-4">{title}</h1>
          <BackForm
            key="NewsForm"
            form={form}
            fields={fields}
            submit={submitActivitiesRequested}
            fetch={fetchActivitiesRequested}
            id={id}
            goBack={goBackToList}
            vali
            date={validate}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Component;

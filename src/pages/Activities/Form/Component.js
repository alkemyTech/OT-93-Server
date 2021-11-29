/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Col,
  Row,
  Container,
} from 'reactstrap';
import Title from '../../../Components/Title';
import BackForm from '../../../Components/BackForm';
import { REQUIRED, CREATE_ACTIVITY } from '../../../utils/constants';

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
    if (!values.name || !values.image) {
      errors.name = REQUIRED;
      errors.image = REQUIRED;
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
          <Title text={<h1>{CREATE_ACTIVITY}</h1>} />
          <BackForm
            key="NewsForm"
            form={form}
            fields={fields}
            submit={submitActivitiesRequested}
            fetch={fetchActivitiesRequested}
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

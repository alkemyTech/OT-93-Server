/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  Container,
  Col,
  Row,
} from 'reactstrap';
import Title from '../../../Components/Title';
import BackForm from '../../../Components/BackForm';
import { REQUIRED, CREATE_SLIDE } from '../../../utils/constants';
import {
  getRoutes,
} from '../../../utils';

const {
  backOfficeRoutes,
} = getRoutes('mainRoutes');

const Component = ({
  title,
  form,
  fields,
  submitSlidesRequested,
  fetchSlidesRequested,
  match,
  history: { push },
}) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name || !values.image || !values.content) {
      errors.name = REQUIRED;
      errors.image = REQUIRED;
    }
    return errors;
  };

  const goBackToList = () => push(backOfficeRoutes.slides);

  return (
        <Container>
          <Row>
            <Col>
            <Title text={<h1>{CREATE_SLIDE}</h1>} />
            <BackForm
              key="SlidesForm"
              form={form}
              fields={fields}
              submit={submitSlidesRequested}
              fetch={fetchSlidesRequested}
              id={match.params.id}
              validate={validate}
              goBack={goBackToList}
            />
            </Col>
          </Row>
        </Container>
  );
};

export default Component;

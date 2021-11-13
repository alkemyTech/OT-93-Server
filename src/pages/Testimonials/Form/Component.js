/* eslint-disable */
import React, { useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import BackForm from '../../../Components/BackForm';
import Title from '../../../Components/Title';
import { REQUIRED } from '../../../utils/constants';
import { getRoutes } from '../../../utils';

const { backOfficeRoutes } = getRoutes('mainRoutes');

const Component = ({
  title,
  form,
  fields,
  submitTestimonialRequested,
  fetchTestimonialRequested,
  match,
  history: { push },
}) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name || !values.image || !values.content) {
      errors.name = REQUIRED;
      errors.image = REQUIRED;
      errors.content = REQUIRED;
    }
    return errors;
  };

  const goBackToList = () => push(backOfficeRoutes.testimonials);

  return (
    <Container>
      <Row>
        <Col>
          <Title text={title} />
          <BackForm
            key="NewsForm"
            form={form}
            fields={fields}
            submit={submitTestimonialRequested}
            fetch={fetchTestimonialRequested}
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

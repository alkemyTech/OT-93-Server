/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */

import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import {
  Container,
  Col,
  Row,
} from 'reactstrap';
import BackForm from '../../../Components/BackForm';
import { REQUIRED } from '../../../utils/constants';

const Component = ({
  title,
  form,
  fields,
  submitTestimonialRequested,
  fetchTestimonialRequested,
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
    fetchTestimonialRequested({ id });
  }, [fetchTestimonialRequested]);

  return (
    <Container>
      <Row>
        <Col>
            <h1 className="text-center mb-4">{title}</h1>
            <BackForm
              key="TestimonialForm"
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

Component.propTypes = {
  form: PropTypes.shape({
  }).isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  submitTestimonialRequested: PropTypes.func.isRequired,
  fetchTestimonialRequested: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string,
};

Component.defaultProps = {
  match: {},
  title: 'Testimonios',
};

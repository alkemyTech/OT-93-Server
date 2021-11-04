import React from 'react';
import { PropTypes } from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { getRoutes } from '../../utils';
import BackForm from '../../Components/BackForm';
import {
  REQUIRED,
  WRONG_PASSWORD,
  SHORT_PASSWORD,
  INVALID_PASSWORD,
} from '../../utils/constants';

const publicRoutes = getRoutes('publicRoutes');

const Component = ({
  title,
  form,
  fields,
  postRegisterUserRequestedSagas,
  match,
  history: { push },
}) => {
  const validate = (values) => {
    const errors = {};
    if (!values.email || !values.password || !values.confirmPassword) {
      errors.email = REQUIRED;
      errors.password = REQUIRED;
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = WRONG_PASSWORD;
    }
    if (values.password < 6) {
      errors.password = SHORT_PASSWORD;
    }
    const myRegex = /(?=.*[a-z])(?=.*\d)(?=.*[$.,@$!%*?&])[a-zA-Z\d.*]{5,20}[^'\s]/;
    if (!myRegex.test(values.password)) {
      errors.password = INVALID_PASSWORD;
    }
    return errors;
  };

  const goBackToHome = () => push(publicRoutes.home);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mb-4">{title}</h1>
          <BackForm
            key="RegisterForm"
            form={form}
            fields={fields}
            submit={postRegisterUserRequestedSagas}
            id={match.params.id}
            validate={validate}
            goBack={goBackToHome}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Component;

Component.propTypes = {
  form: PropTypes.shape({}).isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  postRegisterUserRequestedSagas: PropTypes.func.isRequired,
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
  title: 'Register',
};

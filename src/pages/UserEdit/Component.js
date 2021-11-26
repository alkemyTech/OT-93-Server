/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { get } from 'lodash';
import BackForm from '../../Components/BackForm';
import {
  REQUIRED,
  SHORT_PASSWORD,
} from '../../utils/constants';

const Component = ({
  title,
  form,
  fields,
  editUser,
  match,
  history: { push },
}) => {
  const validate = (values) => {
    const errors = {};
    if (!values.email || !values.image) {
      errors.email = REQUIRED;
      errors.image = REQUIRED;
    }
    if (values.password < 8) {
      errors.password = SHORT_PASSWORD;
    }
    if (values.name < 4) {
      errors.name = SHORT_PASSWORD;
    }
    if (values.role === 'rol') {
      errors.role = REQUIRED;
    }
    return errors;
  };
  const id = get(match, 'params.id');
  const goBackToHome = () => push('/');

  return (
        <Container>
          <Row>
            <Col>
              <h1 className="text-center mb-4">{title}</h1>
              <BackForm
                key="RegisterForm"
                form={form}
                fields={fields}
                submit={editUser}
                id={id}
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
  form: PropTypes.shape({
  }).isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  editUser: PropTypes.func.isRequired,
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
  title: 'Gestionar usuario',
};

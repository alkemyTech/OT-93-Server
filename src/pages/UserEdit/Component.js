import React from 'react';
import { PropTypes } from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { getRoutes } from '../../utils';
import BackForm from '../../Components/BackForm';
import {
  REQUIRED,
  SHORT_PASSWORD,
} from '../../utils/constants';

const publicRoutes = getRoutes('publicRoutes');

const Component = ({
  title,
  form,
  fields,
  postEditUserRequestedSagas,
  match,
  history: { push },
}) => {
  const validate = (values) => {
    const errors = {};
    if (!values.email || !values.name || !values.image || !values.role || !values.password) {
      errors.email = REQUIRED;
      errors.name = REQUIRED;
      errors.image = REQUIRED;
      errors.role = REQUIRED;
      errors.password = REQUIRED;
    }
    if (values.password < 8) {
      errors.password = SHORT_PASSWORD;
    }
    if (values.name < 4) {
      errors.name = SHORT_PASSWORD;
    }
    if (values.role !== ('administrador' || 'usuario')) {
      errors.role = REQUIRED;
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
                submit={postEditUserRequestedSagas}
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
  form: PropTypes.shape({
  }).isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  postEditUserRequestedSagas: PropTypes.func.isRequired,
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
  title: 'Editar usuario',
};

import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { get } from 'lodash';
import BackForm from '../../Components/BackForm';
import {
  REQUIRED,
  WRONG_PASSWORD,
  SHORT_PASSWORD,
  INVALID_PASSWORD,
} from '../../utils/constants';
import pdf from '../../utils/assets/pdf-prueba.pdf';

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

  const ID = () => get(match, 'params.id');
  const [terms, setTerms] = useState(false);
  const termsReaded = (e) => {
    setTerms(e.target.checked);
  };
  const submitInfo = () => {
    if (terms === true) {
      postRegisterUserRequestedSagas();
    }
  };
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
          submit={submitInfo}
          id={ID}
          validate={validate}
          goBack={goBackToHome}
        />
        <input
          className="form-check-input mx-2"
          type="checkbox"
          onClick={termsReaded}
        />
        <Popup
          trigger={(
            <p className="btn text-blue p-0">
              <u> Términos y condiciones</u>
            </p>
          )}
          modal
          nested
        >
          <Document file={pdf}>
            <Page pageNumber={1} />
          </Document>
        </Popup>
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
  title: 'Registrarse',
};

/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Col,
  Card,
  CardBody,
  Row,
  Container,
} from 'reactstrap';
import Title from '../../Components/Title/index';
import { REQUIRED, CONTACT_TITLE } from '../../utils/constants';
import '../../css/Home.css';
import BackForm from '../../Components/BackForm';

const validate = (values) => {
  const errors = {};

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Dirección de e-mail inválida';
  }
  if (!values.name) {
    errors.name = REQUIRED;
  }
  if (!/^\d{8,}$/.test(values.phone)) {
    errors.phone = 'El teléfono debe contener 8 números como mínimo';
  }
  if (!values.message) {
    errors.message = REQUIRED;
  }
  return errors;
};

const Component = ({
  form,
  fields,
  submitContactRequested,
  fetchContactRequested,
  match,
  history: { push },

}) => {
  const id = match.params.id;
  const goBackToList = () => push('/');

  useEffect(() => {
    fetchContactRequested(id);
  }, [fetchContactRequested]);

  return (
    <>
      <Container fluid>
        <Row>
          <Card className="form-card">
          <Col>
          <Title
            text={<h3>{CONTACT_TITLE}</h3>}
            className="text-center mb-0 mt-5"
          />
          </Col>
          <CardBody>
          <BackForm
            key="NewsForm"
            form={form}
            fields={fields}
            submit={submitContactRequested}
            fetch={fetchContactRequested}
            id={id}
            goBack={goBackToList}
            validate={validate}
          />
          </CardBody>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Component;

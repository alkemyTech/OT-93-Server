import React from 'react';
import { useFormik } from 'formik';
import {
  Label,
  Col,
  Button,
  FormGroup,
  Card,
  CardBody,
  Input,
  Row,
  Container,
  Form,
} from 'reactstrap';
import { map } from 'lodash-es';
import get from 'lodash/get';
import { PropTypes } from 'prop-types';
import { REQUIRED, SEND, CONTACT_TITLE } from '../../utils/constants';
import { contactForm, getContactFields } from '../../utils/selectors';

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

const Component = () => {
  const contactFields = getContactFields();
  const Formik = useFormik({
    initialValues: { ...contactForm },
    enableReinitialize: true,
    validate,
    onSubmit: () => {
    },
  });
  return (
        <>

    <Container>
      <Row>
        <Col
          md={{ size: 8, offset: 2 }}
          lg={{ size: 6, offset: 3 }}
          className="my-5 p-0"
        >
            <h1 className="text-center mb-4">{CONTACT_TITLE}</h1>
          <Card className="form-card">
            <CardBody>
              <Form key="form" onSubmit={Formik.handleSubmit}>
              {map(contactFields, (field) => (
                  <FormGroup key={get(field, 'id')}>
                    <Col className="mb-3 px-2" tag="h5">
                      <Label for={get(field, 'id')}>
                        {get(field, 'label')}
                      </Label>
                    </Col>
                    <Col className="mb-3 px-2">
                      <Input
                        className="form-control"
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        value={Formik.values[get(field, 'name')]}
                        placeholder={get(field, 'placeholder')}
                        name={get(field, 'name')}
                        type={get(field, 'type')}
                        id={get(field, 'id')}
                      />
                    </Col>
                    <Col className="mb-3 p-0">
                      {Formik.errors[get(field, 'name')]
                        && Formik.touched[get(field, 'name')] && (
                          <p className="error animate__animated animate__shakeX text-center">
                            {Formik.errors[get(field, 'name')]}
                          </p>
                      )}
                    </Col>
                  </FormGroup>
              ))}
                <Col className="mt-4 d-flex justify-content-between px-2">
                  <Button
                    type="submit"
                    color="primary"
                    className="px-4 btn-submit"
                  >
                    {SEND}
                  </Button>
                </Col>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
        </>
  );
};

export default Component;

Component.propTypes = {
  title: PropTypes.string,
};

Component.defaultProps = {
  title: 'Contactate con nosotros',
};

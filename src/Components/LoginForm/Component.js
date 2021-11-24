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
import map from 'lodash/map';
import get from 'lodash/get';
import { PropTypes } from 'prop-types';
import { REQUIRED, SEND, CANCEL } from '../../utils/constants';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = REQUIRED;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Dirección de e-mail inválida';
  }
  if (!values.password) {
    errors.password = REQUIRED;
  } else if (!/^(?=.*\d)(?=.*[^\w\s\d])(?=.*[a-zA-Z])(?!.*[\s]).{6,}$/gm.test(values.password)) {
    errors.password = 'Contraseña inválida. La contraseña debe tener una longitud mínima de 6 caraceteres, y contener al menos un número, una letra y un símbolo.';
  }
  return errors;
};

const Component = ({
  title,
  form,
  fields,
  submitLoginRequested,
  cleanLoginForm,
}) => {
  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: { ...form },
    validate,
    onSubmit: (values) => {
      submitLoginRequested(values);
      cleanLoginForm();
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
            <h1 className="text-center mb-4">{title}</h1>
          <Card className="form-card">
            <CardBody>
              <Form key="form" onSubmit={Formik.handleSubmit}>
                {map(fields, (field) => (
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
                        type={get(field, 'type')}
                        name={get(field, 'name')}
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
                    color="danger"
                    className="btn-cancel"
                    // onClick={goBack}
                  >
                    {CANCEL}
                  </Button>
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
  form: PropTypes.shape({
  }).isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  submitLoginRequested: PropTypes.func.isRequired,
  cleanLoginForm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  title: PropTypes.string,
};

Component.defaultProps = {
  title: 'Log-in',
};

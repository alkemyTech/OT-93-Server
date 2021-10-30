import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import {
  Label, Col, Button, FormGroup, Card, CardBody, Input, Row, Container, Form,
} from 'reactstrap';
import map from 'lodash/map';
import get from 'lodash/get';
import { SEND, CANCEL } from '../../utils/constants';

const BackForm = ({
  form, fields, submit, fetch, id, validate, goBack, push,
}) => {
  useEffect(() => {
    fetch(id);
  }, [fetch, id]);

  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: { ...form },
    validate,
    onSubmit: (payload) => submit({ payload, id, push }),
  });

  return (
        <Container>
            <Row>
                <Col
                  md={{ size: 8, offset: 2 }}
                  lg={{ size: 6, offset: 3 }}
                  className="my-5 p-0"
                >
                    <Card className="form-card">
                        <CardBody>
                            <Form
                              key="form"
                              onSubmit={Formik.handleSubmit}
                            >
                                {map(fields, (field) => (
                                    <FormGroup
                                      key={get(field, 'id')}
                                    >
                                        <Col
                                          className="mb-3 px-2"
                                          tag="h5"
                                        >
                                            <Label
                                              for={get(field, 'id')}
                                            >
                                                {get(field, 'label')}
                                            </Label>
                                        </Col>
                                        <Col
                                          className="mb-3 px-2"
                                        >
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
                                        <Col
                                          className="mb-3 p-0"
                                        >
                                            {Formik.errors[get(field, 'name')]
                                        && Formik.touched[get(field, 'name')]
                                        && (
                                            <p className="error animate__animated animate__shakeX text-center">
                                                {Formik.errors[get(field, 'name')]}
                                            </p>
                                        )}
                                        </Col>

                                    </FormGroup>
                                ))}
                                <Col
                                  className="mt-4 d-flex justify-content-between px-2"
                                >
                                    <Button
                                      color="danger"
                                      className="btn-cancel"
                                      onClick={goBack}
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
  );
};

export default BackForm;

BackForm.propTypes = {
  form: PropTypes.shape({}).isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  goBack: PropTypes.func.isRequired,
  id: PropTypes.string,
  submit: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
};

BackForm.defaultProps = {
  id: null,
};

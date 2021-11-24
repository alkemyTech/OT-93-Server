/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import { get, map } from 'lodash';
import { Link } from 'react-router-dom';
import Title from '../../../Components/Title';
import { getRoutes } from '../../../utils';
import {
  USERS, CREATE_USER, Delete, EDIT, DATA,
} from '../../../utils/constants';

const Component = ({
  list, fetchUsersRequested, deleteUsers, history: { push },
}) => {
  useEffect(() => {
    fetchUsersRequested();
  }, [fetchUsersRequested, deleteUsers]);

  const { backOfficeRoutes } = getRoutes('mainRoutes');
  const documents = get(list.documents, DATA);

  const onDelete = (prop) => {
    deleteUsers(get(prop, 'id'));
  };
  const onEdit = (prop) => {
    const id = get(prop, 'id');
    push(`${backOfficeRoutes.users}/${id}`);
  };

  return (
    <Container>
      <Row className="list-row">
        <Col sm="12" className="mr-2">
          <Title text={<h1>{USERS}</h1>} className="mt-3 pb-5" />
          <Link
            to={backOfficeRoutes.users}
            className="btn btn-secondary mb-5"
          >
            {CREATE_USER}
          </Link>
          {documents
            && map(documents, (element) => (
              <Card key={element.id}>
                <CardBody>
                  <Row>
                    <Col>
                      <CardTitle tag="h4">Name: {element.name}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                       Email: {element.email}
                      </CardSubtitle>
                    </Col>
                    <Col>
                      <button type="button" className="btn btn-outline-danger m-1" onClick={() => { onDelete(element); }}>
                        {Delete}
                      </button>
                      <button type="button" className="btn btn-outline-primary m-1" onClick={() => { onEdit(element); }}>
                        {EDIT}
                      </button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

Component.propTypes = {
  fetchUsersRequested: PropTypes.func.isRequired,
  deleteUsers: PropTypes.func.isRequired,
  list: PropTypes.shape({
    documents: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Component;

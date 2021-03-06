/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Row, Container } from 'reactstrap';
import get from 'lodash/get';
import { getRoutes, swalConfirmAction } from '../../../utils';
import Title from '../../../Components/Title';
import TableList from '../../../Components/TableList';
import {
  GOBACK,
  ADD,
  DUMMY_TEXT,
  ACTIVITIES,
  Warning,
  Delete,
  Confirm,
  Cancel,
} from '../../../utils/constants';

const Component = ({
  fetchActivitiesRequested,
  deleteActivitiesRequested,
  list,
  table,
  history: { push },
}) => {
  useEffect(() => {
    fetchActivitiesRequested();
  }, [fetchActivitiesRequested]);

  const { backOfficeRoutes } = getRoutes('mainRoutes');

  const onDelete = (prop) => {
    const deleteField = () => {
      deleteActivitiesRequested(get(prop, 'id'));
    };
    swalConfirmAction(
      `${Warning}`,
      `${Delete}`,
      `${Cancel}`,
      `${Delete}`,
      `${Confirm}`,
      deleteField
    );
  };

  const onEdit = (prop) => {
    const id = get(prop, 'id');
    push(`${backOfficeRoutes.newActivity}/${id}`);
  };

  const onView = (prop) => {
    const id = get(prop, 'id');
    return id;
  };
  return (
    <Container>
      <Row className="list-row">
        <Col sm="12" className="mr-2">
          <Row className="d-flex justify-content-between align-items-center">
            <Col className="d-flex justify-content-evenly">
              <Button
                className="ml-3 px-3 btn-cancel"
                color="danger"
                onClick={() => push(backOfficeRoutes.home)}
              >
                {GOBACK}
              </Button>
              <h1 className="text-center mb-3 my-1">Novedades</h1>
              <Button
                className="btn-submit mr-3"
                color="success"
                onClick={() => push(backOfficeRoutes.newActivity)}
              >
                {ADD}
              </Button>
            </Col>
          </Row>
          <TableList
            documents={get(list, 'documents')}
            onDelete={onDelete}
            onEdit={onEdit}
            onView={onView}
            table={table}
          />
        </Col>
      </Row>
    </Container>
  );
};

Component.propTypes = {
  fetchActivitiesRequested: PropTypes.func.isRequired,
  deleteActivitiesRequested: PropTypes.func.isRequired,
  list: PropTypes.shape({}).isRequired,
  table: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Component;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Button,
  Row,
  Container,
} from 'reactstrap';
import get from 'lodash/get';
import {
  getRoutes, swalConfirmAction,
} from '../../../utils';
import Title from '../../../Components/Title';
import TableList from '../../../Components/TableList';
import Searcher from '../../../Components/Searcher';
import {
  GOBACK,
  ADD,
  NEWS,
  Warning,
  Delete,
  Confirm,
  Cancel,
} from '../../../utils/constants';

const Component = ({
  fetchDebounceNewsRequested,
  deleteNewsRequested,
  fetchNewsRequested,
  list,
  table,
  history: { push },
}) => {
  useEffect(() => {
    fetchNewsRequested();
  }, [fetchNewsRequested]);

  const {
    backOfficeRoutes,
  } = getRoutes('mainRoutes');

  const onDelete = (prop) => {
    const deleteField = () => {
      deleteNewsRequested(get(prop, 'id'));
    };
    swalConfirmAction(Warning, Delete, Confirm, Cancel, deleteField());
  };

  const onEdit = (prop) => {
    const id = get(prop, 'id');
    push(`${backOfficeRoutes.newsForm}/${id}`);
  };

  return (
    <Container>
      <Row className="list-row">
        <Col sm="12" className="mr-2">
          <Row className="d-flex justify-content-between align-items-center mt-5 mb-5">
            <Col className="d-flex justify-content-evenly">
              <Button
                className="ml-3 px-3 btn-cancel btn-lg"
                color="danger"
                onClick={() => push(backOfficeRoutes.home)}
              >
                {GOBACK}
              </Button>
              <Title text={<h1>{NEWS}</h1>} />
              <Button
                className="btn-submit mr-3 btn-lg"
                color="success"
                onClick={() => push(backOfficeRoutes.newsForm)}
              >
                {ADD}
              </Button>
            </Col>
          </Row>
          <Searcher
            fetchDebounce={fetchDebounceNewsRequested}
            fetchRequested={fetchNewsRequested}
          />
          <TableList
            documents={get(list, 'documents')}
            onDelete={onDelete}
            onEdit={onEdit}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...table}
          />
        </Col>
      </Row>
    </Container>
  );
};

Component.propTypes = {
  fetchNewsRequested: PropTypes.func.isRequired,
  deleteNewsRequested: PropTypes.func.isRequired,
  fetchDebounceNewsRequested: PropTypes.func.isRequired,
  list: PropTypes.shape({}).isRequired,
  table: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Component;

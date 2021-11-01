/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Button,
  Row,
  Container,
} from 'reactstrap';
import get from 'lodash/get';
import { getRoutes, swalConfirmAction } from '../../../utils';
import TableList from '../../../Components/TableList';
import { GOBACK, ADD } from '../../../utils/constants';

const mainRoutes = getRoutes('mainRoutes');

const Component = ({
  fetchNewsRequested,
  deleteNewsRequested,
  list,
  table,
  history: { push },
}) => {
  useEffect(() => {
    fetchNewsRequested();
  }, [fetchNewsRequested]);

  const onDelete = (prop) => {
    const deleteField = () => {
      deleteNewsRequested(get(prop, 'id'));
    };
    swalConfirmAction('warning', 'Eliminar Registro', '', 'Confirmar', 'Cancelar', deleteField);
  };

  const onEdit = (prop) => {
    const id = get(prop, 'id');
    push(`${mainRoutes.newsForm}/${id}`);
  };

  const onView = (prop) => {
    const id = get(prop, 'id');
    console.log('debe llevar al detalle');
    console.log(id);
  };

  return (
        <Container>
            <Row className="list-row">
                <Col sm="12" className="mr-2">
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col>
                        <Button className="ml-3 px-3 btn-cancel" onClick={() => push(mainRoutes.home)}>
                            {GOBACK}
                        </Button>
                        <h1 className="text-center mb-3 my-1">Novedades</h1>
                        <Button className="btn-submit mr-3" onClick={() => push(mainRoutes.newsForm)}>
                            {ADD}
                        </Button>
                        </Col>
                    </Row>
                    <TableList
                      documents={get(list, 'documents')}
                      onDelete={onDelete}
                      onEdit={onEdit}
                      onView={onView}
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
  list: PropTypes.shape({}).isRequired,
  table: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Component;

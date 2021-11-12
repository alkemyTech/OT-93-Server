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
// import get from 'lodash/get';

// eslint-disable-next-line arrow-body-style
const Component = ({
  list, fetchCategoriesRequested, deleteCategorie, history: { push },
}) => {
  useEffect(() => {
    fetchCategoriesRequested();
  }, [fetchCategoriesRequested, deleteCategorie]);

  const { backOfficeRoutes } = getRoutes('mainRoutes');
  const documents = get(list.documents, 'data');

  const onDelete = (prop) => {
    deleteCategorie(get(prop, 'id'));
  };
  const onEdit = (prop) => {
    const id = get(prop, 'id');
    push(`${backOfficeRoutes.categories}/${id}`);
  };

  return (
    <Container>
      <Row className="list-row">
        <Col sm="12" className="mr-2">
          <Title text={<h1>Categorías</h1>} className="mt-3 pb-5" />
          <Link
            to={backOfficeRoutes.categories}
            className="btn btn-secondary mb-5"
          >
            Crear categoría
          </Link>
          {documents
            && map(documents, (element) => (
              <Card key={element.id}>
                <CardBody>
                  <Row>
                    <Col>
                      <CardTitle tag="h4">{element.name}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {element.created_at}
                      </CardSubtitle>
                    </Col>
                    <Col>
                      <button type="button" className="btn btn-outline-danger m-1" onClick={() => { onDelete(element); }}>
                        Borrar
                      </button>
                      <button type="button" className="btn btn-outline-primary m-1" onClick={() => { onEdit(element); }}>
                        Editar
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
  fetchCategoriesRequested: PropTypes.func.isRequired,
  deleteCategorie: PropTypes.func.isRequired,
  list: PropTypes.shape({
    documents: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Component;

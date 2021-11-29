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
  getRoutes,
  swalConfirmAction,
} from '../../../utils';
import TableList from '../../../Components/TableList';
import {
  GOBACK,
  ADD,
  TESTIMONIALS,
} from '../../../utils/constants';
import Title from '../../../Components/Title';

const Component = ({
  deleteTestimonialRequested,
  fetchTestimonialRequested,
  list,
  table,
  history: { push },
}) => {
  useEffect(() => {
    fetchTestimonialRequested();
  }, [fetchTestimonialRequested]);

  const { backOfficeRoutes } = getRoutes('mainRoutes');

  const onDelete = (prop) => {
    const deleteField = () => {
      deleteTestimonialRequested(get(prop, 'id'));
    };
    swalConfirmAction('warning', 'Eliminar Registro', '', 'Confirmar', 'Cancelar', deleteField);
  };

  const onEdit = (prop) => {
    const id = get(prop, 'id');
    push(`${backOfficeRoutes.testimonialsform}/${id}`);
  };

  const onView = (prop) => {
    const id = get(prop, 'id');
    // eslint-disable-next-line no-console
    console.log('debe llevar al detalle');
    // eslint-disable-next-line no-console
    console.log(id);
  };

  return (
    <Container>
      <Row className="list-row">
        <Col sm="12" className="mr-2">
          <Row className="d-flex justify-content-between align-items-center mt-5 mb-5">
            <Col className="d-flex justify-content-evenly">
              <Button
                className="ml-3 px-3 btn-cancel"
                color="danger"
                onClick={() => push(backOfficeRoutes.home)}
              >
                {GOBACK}
              </Button>
              <Title text={<h1>{TESTIMONIALS}</h1>} />
              <Button
                className="btn-submit mr-3"
                color="success"
                onClick={() => push(backOfficeRoutes.testimonial)}
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
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...table}
          />
        </Col>
      </Row>
    </Container>
  );
};

Component.propTypes = {
  fetchTestimonialRequested: PropTypes.func.isRequired,
  deleteTestimonialRequested: PropTypes.func.isRequired,
  list: PropTypes.shape({}).isRequired,
  table: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Component;

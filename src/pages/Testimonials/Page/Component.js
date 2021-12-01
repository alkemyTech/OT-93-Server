/* eslint-disable react/no-children-prop */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Container, Spinner,
} from 'reactstrap';
import map from 'lodash/map';
import Title from '../../../Components/Title';
import Card from '../../../Components/Card';

const Testimonials = ({ fetchTestimonialRequested, data }) => {
  useEffect(() => {
    fetchTestimonialRequested();
  }, [fetchTestimonialRequested]);

  return (
    <Container>
      <Row>
        <Col>
          <Title text={<h1>Testimonios</h1>} />
          <Row>
            {data?.length > 0 ? (
              map(data, (element, index) => <Card key={index} data={element} />)
            ) : (
              <Col className="m-5">
                <Spinner children="" color="dark" className="spinner-loader m-5" />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

Testimonials.propTypes = {
  fetchTestimonialRequested: PropTypes.func.isRequired,
  title: PropTypes.string,
  data: PropTypes.array,
};

export default Testimonials;

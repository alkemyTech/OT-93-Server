/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import Slider from 'react-slick';
import map from 'lodash/map';
import Title from '../Title/index';
import { getRoutes } from '../../utils';
import fromState from '../../core/selectors';
import '../../css/Slick.css';

const { publicRoutes } = getRoutes('mainRoutes');

const Slick = ({ items, title, showLinks }) => {
  const settings = useSelector(fromState.Login.getSlickSettings);
  const contact = 'Contacto';
  const viewAll = 'Ver todas';
  const testimonies = 'Testimonios';
  return (
    <Row className="mx-5 px-5">
      <Col>
        <Title
          text={<h2>{title}</h2>}
          className="my-5"
        />
        <Slider {...settings}>
          {map(items, (item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.name}
            />
          ))}
        </Slider>
        {showLinks && (
          <Row className="news-row">
            <Col
              xs="12"
              md="4"
              className="d-md-flex text-md-start pt-md-2 ps-md-5"
            >
              <Link className="news-link px-2 ps-xl-5 ms-xl-5" to={publicRoutes.testimonial}>
                {testimonies}
              </Link>
              <Link className="news-link px-2" to={publicRoutes.contact}>
                {contact}
              </Link>
            </Col>
            <Col md="4">
              <Link className="news-link" to={publicRoutes.news}>
                <Button color="primary" className="news-btn my-3 mt-md-0">
                  {viewAll}
                </Button>
              </Link>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

Slick.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  showLinks: PropTypes.bool,
};

Slick.defaultProps = {
  showLinks: false,
};

export default Slick;

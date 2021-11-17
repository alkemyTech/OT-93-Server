/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import Slider from 'react-slick';
import map from 'lodash/map';
import Title from '../Title/index';
import '../../css/Slick.css';

const Slick = ({
  settings, items, title, showLinks, links, labelButton, routes,
}) => (
  <Row className="mb-5 pb-5 mx-5 px-5">
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
            <Link className="news-link px-2 ps-xl-5 ms-xl-5" to={routes.testimonial}>
              {links[0]}
            </Link>
            <Link className="news-link px-2" to={routes.contact}>
              {links[1]}
            </Link>
          </Col>
          <Col md="4">
            <Link className="news-link" to={routes.news}>
              <Button color="primary" className="news-btn my-3 mt-md-0">
                {labelButton}
              </Button>
            </Link>
          </Col>
        </Row>
      )}
    </Col>
  </Row>
);

Slick.propTypes = {
  settings: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  showLinks: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.string),
  labelButton: PropTypes.string,
  routes: PropTypes.object,
};

Slick.defaultProps = {
  showLinks: false,
};

export default Slick;

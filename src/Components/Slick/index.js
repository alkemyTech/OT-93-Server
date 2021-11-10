/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import map from 'lodash/map';
import Title from '../Title/index';
import fromState from '../../core/selectors';
import '../../css/Slick.css';

const Slick = ({ items }) => {
  const settings = useSelector(fromState.Login.getSlickSettings);
  const lastNews = 'Últimas novedades';
  return (
    <Row className="mx-5">
      <Col>
        <Title
          text={<h2>{lastNews}</h2>}
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
      </Col>
    </Row>
  );
};

Slick.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Slick;

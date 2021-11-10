/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import map from 'lodash/map';
import '../../css/Slick.css';

const Slick = ({ items }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Row className="mx-5">
      <Col>
        <Slider {...settings}>
          {map(items, (item) => (
            <img
              className="slick-img"
              key={item.id}
              src={item.src}
              alt={item.name}
            />
          ))}
        </Slider>
      </Col>
    </Row>
  );
};

Slick.propTypes = {
  items: PropTypes.array,
};

Slick.defaultProps = {
  items: [
    {
      name: 'Placeholder image',
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg',
    },
    {
      name: 'Placeholder image',
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg',
    },
    {
      name: 'Placeholder image',
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg',
    },
    {
      name: 'Placeholder image',
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg',
    },
  ],
};

export default Slick;

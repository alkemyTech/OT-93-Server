import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const Title = ({
  text, className, onlyTitle, image,
}) => (
  <Row className={className}>
    <Col>
      {text}
      {!onlyTitle && (
        <img
          style={{ position: 'relative', bottom: '56px', zIndex: -1 }}
          src={image}
          alt="Title background"
        />
      )}
    </Col>
  </Row>
);

Title.propTypes = {
  text: PropTypes.object.isRequired,
  className: PropTypes.string,
  onlyTitle: PropTypes.bool,
  image: PropTypes.string,
};

Title.defaultProps = {
  image:
    'https://www.seekpng.com/png/full/375-3753368_background-image-for-title-unhitched-book-by-sunny.png',
  onlyTitle: true,
};

export default Title;

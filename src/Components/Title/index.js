import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const Title = ({ text, onlyTitle, image }) => (
  <Container>
    <h1>{text}</h1>
    {!onlyTitle && (
      <img
        style={{ position: 'relative', bottom: '56px', zIndex: -1 }}
        src={image}
        alt="Title background"
      />
    )}
  </Container>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  onlyTitle: PropTypes.bool,
  image: PropTypes.string,
};

Title.defaultProps = {
  image:
    'https://www.seekpng.com/png/full/375-3753368_background-image-for-title-unhitched-book-by-sunny.png',
  onlyTitle: true,
};

export default Title;

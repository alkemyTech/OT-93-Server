import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Title from '../Title';
import { YTURL } from '../../utils/constants';
import PlayButton from '../PlayButton';

const Component = ({ text }) => (
  <Row className="my-5 py-5">
    <Col>
      <Title text={<h2>{text}</h2>} />
      <ReactPlayer
        url={YTURL}
        width="50%"
        height="400px"
        playing
        light
        style={{ margin: 'auto' }}
        volume={0.3}
        playIcon={<PlayButton />}
      />
    </Col>
  </Row>
);

Component.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Component;

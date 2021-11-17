import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Title from '../Title/index';

const Component = ({ text }) => (
  <Row className="my-5 py-5">
    <Col>
      <Title text={<h2>{text}</h2>} />
    </Col>
  </Row>
);

Component.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Component;

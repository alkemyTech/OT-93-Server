import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Title from '../Title/index';

const Component = ({ text, labelButton }) => (
  <Row>
    <Col>
       <Title text={<h1>{text}</h1>} />
       <Button>{labelButton}</Button>
    </Col>
  </Row>
);

Component.propTypes = {
  text: PropTypes.string.isRequired,
  labelButton: PropTypes.string.isRequired,
};

export default Component;

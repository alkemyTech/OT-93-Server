import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Title from '../Title';

const Component = ({ text, labelButton }) => (
  <Row className="my-5 py-5">
    <Col>
      <Title text={<h3>{text}</h3>} />
    </Col>
    <Col>
      <Button
        type="button"
        color="primary"
        className="header-button-register py-2 px-5"
        style={{ width: 'fit-content' }}
      >
        {labelButton}
      </Button>
    </Col>
  </Row>
);

Component.propTypes = {
  text: PropTypes.string.isRequired,
  labelButton: PropTypes.string.isRequired,
};

export default Component;

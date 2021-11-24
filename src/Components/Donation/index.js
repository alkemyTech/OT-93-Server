import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Title from '../Title';

const Component = ({ text, labelButton, url }) => (
  <Row className="my-5 py-5">
    <Col>
      <Title text={<h3>{text}</h3>} />
    </Col>
    <Col>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Button
          type="button"
          color="primary"
          className="header-button-register py-2 px-5"
          style={{ width: 'fit-content' }}
        >
          {labelButton}
        </Button>
      </a>
    </Col>
  </Row>
);

Component.propTypes = {
  text: PropTypes.string.isRequired,
  labelButton: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Component;

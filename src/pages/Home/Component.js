import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Form from '../../Components/Edit-Create-Form';

const Component = ({ welcomeText }) => (
  <div>
    <Row>
      <Col>
        <h1>{welcomeText}</h1>
        <Form />
      </Col>
    </Row>
  </div>
);

Component.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};

export default Component;

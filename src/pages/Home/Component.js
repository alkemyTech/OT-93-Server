/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import Spinner from '../../Components/Spinner';
import Sidebar from '../../Components/Sidenav';

const Component = ({ welcomeText }) => (
  <Container fluid>
    <Row>
      <Col>
        <h1>{welcomeText}</h1>
        <Sidebar />
        <Spinner show={false} text="cargando" />
      </Col>
    </Row>
  </Container>
);

Component.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};

export default Component;

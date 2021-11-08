/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import Sidebar from '../../Components/Sidenav';
import Spinner from '../../Components/Spinner';
import '../../css/Home.css';

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

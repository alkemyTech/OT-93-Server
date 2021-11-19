import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import '../../css/NotFound.css';

const NotFound = () => (
  <Container>
    <Row>
      <Col className="not_found">
        <div className="color">
          <p className="letter1">4</p>
          <p className="letter2">0</p>
          <p className="letter3">4</p>
        </div>
        <h1>No puedo encontrar esta página</h1>
        <Link to="/" className="btn btn-secondary mt-3">
          Ir a Inicio
        </Link>
      </Col>
    </Row>
  </Container>
);

export default NotFound;

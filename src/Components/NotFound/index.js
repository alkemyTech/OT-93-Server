import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import '../../css/NotFound.css';
import error from '../../utils/assets/error404.png';

const NotFound = () => (
  <Container>
    <Row>
      <Col className="not_found">
        <img className="img-404" src={error} alt="error 404" />
        <Link to="/" className="btn btn-error mt-3">
          Ir a Inicio
        </Link>
      </Col>
    </Row>
  </Container>
);

export default NotFound;

/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Sidebar from '../../Components/Sidenav';
import Spinner from '../../Components/Spinner';
import '../../css/Home.css';

const Component = ({ welcomeText }) => {
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>{welcomeText}</h1>
            <Sidebar />
            <Spinner show text="cargando" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="mb-5 px-0">
        <Row className="m-0">
          <Col className="px-0">
          {/* Placeholder for slider component */}
            <Container
              fluid
              className="bg-secondary mt-5 mb-3 px-0"
              style={{ height: '45vh' }}
            />
            <h1 className="welcome-text">{welcomeText}</h1>
          </Col>
        </Row>
      </Container>
      {/* Placeholder for news list */}
      <Container fluid className="pt-5">
        <Row>
          <Col>
            <h2>Últimas novedades</h2>
            <Container fluid className="mt-5 px-3 px-sm-5">
              <Row
                className="justify-content-between"
              >
                <Col xs="6" md="3" className="my-1 px-0">
                  <img className="news-img" src={placeholderImage} alt="" />
                </Col>
                <Col xs="6" md="3" className="my-1 px-0">
                  <img className="news-img" src={placeholderImage} alt="" />
                </Col>
                <Col xs="6" md="3" className="my-1 px-0">
                  <img className="news-img" src={placeholderImage} alt="" />
                </Col>
                <Col xs="6" md="3" className="my-1 px-0">
                  <img className="news-img" src={placeholderImage} alt="" />
                </Col>
              </Row>
            </Container>
            <Row className="news-row">
              <Col xs="12" md="4" className="d-md-flex text-md-start pt-md-2 ps-md-5">
                <Link className="news-link px-2 ps-xl-5 ms-xl-5" to="/">
                  Testimonios
                </Link>
                <Link className="news-link px-2" to="/">
                  Contacto
                </Link>
              </Col>
              <Col md="4">
                <button type="button" className="btn news-btn my-3 mt-md-0">Ver todas</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Component.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};

export default Component;

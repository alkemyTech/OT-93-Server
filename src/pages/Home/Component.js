import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "reactstrap";
import Sidenav from "../../Components/Sidenav/index";
import Alerts from "../../Components/Alert/Alerts";

const Component = ({ welcomeText }) => {
  return (
    <>
      {/* Placeholder for slider component, which will be implemented in the corresponding task */}
      <Container fluid={true} className="mb-5 px-0">
        <Sidenav></Sidenav>
        {/* Show of props pass to Alerts, Must recive an object */}
        <Alerts show={true} icon="success" title="Cargando..."></Alerts>
        <button
          onClick={() => {
            document.location.reload();
          }}
        >
          Show Alert
        </button>
        <Row className="m-0">
          <Col className="px-0">
            <Container
              fluid={true}
              className="bg-secondary mt-5 mb-3 px-0"
              style={{ height: "45vh" }}
            ></Container>
            <h1 className="welcome-text">{welcomeText}</h1>
          </Col>
        </Row>
      </Container>
      {/* Placeholder for news list */}
      <Container fluid={true} className="pt-5">
        <Row>
          <Col>
            <h2>Últimas novedades</h2>
            <Container fluid={true} className="mt-5 px-3 px-sm-5">
              <Row
                className="justify-content-between"
                style={{ height: "239px" }}
              >
                <Col xs="5" xl="2" className="bg-secondary my-1"></Col>
                <Col xs="5" xl="2" className="bg-secondary my-1"></Col>
                <Col xs="5" xl="2" className="bg-secondary my-1"></Col>
                <Col xs="5" xl="2" className="bg-secondary my-1"></Col>
              </Row>
            </Container>
            <Row className="mt-5">
              <Col xs="12" sm="4" className="text-sm-start ps-sm-5">
                <Link className="news-link px-2" to="/">
                  Testimonios
                </Link>
                <Link className="news-link px-2" to="/">
                  Contacto
                </Link>
              </Col>
              <Col sm="4">
                <button className="btn news-btn my-3 mt-sm-0">Ver todas</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Component.propTypes = {
  welcomeText: PropTypes.string.isRequired
};

export default Component;

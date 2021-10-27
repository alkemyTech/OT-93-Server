import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "reactstrap";
import Sidenav from "../../Components/Sidenav/index";
import Alerts from "../../Components/Alert/Alerts";

const Component = ({ welcomeText }) => {
  return (
    <div>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </div>
  );
};

Component.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};

export default Component;

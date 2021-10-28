import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import Sidenav from "../../Components/Sidenav";
import Spinner from "../../Components/Spinner";
import { spinnerProps } from "../../utils/constants";

const Component = ({ welcomeText }) => {
  return (
    <div>
      <Row>
        <Col>
          <Sidenav></Sidenav>

          <Spinner {...spinnerProps}></Spinner>
          <button
            onClick={() => {
              document.location.reload();
            }}
          >
            reload
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

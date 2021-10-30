import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';
import Sidenav from '../../Components/Sidenav/index';
import Alerts from '../../Components/Alert/Alerts';

const Component = ({ welcomeText }) => (
    <div>
      <Row>
        <Col>
          <Sidenav />
          {/* Show of props pass to Alerts, Must recive an object */}
          <Alerts show icon="success" title="Cargando..." />
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

Component.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};

export default Component;

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
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
            type="button"
            onClick={() => {
              document.location.reload();
            }}
          >
            {welcomeText}
          </button>
        </Col>
      </Row>
    </div>
);

Component.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};

export default Component;

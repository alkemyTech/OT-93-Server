import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Spinner from '../../Components/Spinner';

const Component = ({ welcomeText }) => {
  // if show === true, the component is visible, if it´s false not.
  const show = true;

  return (
    <div>
      <Row>
        <Col>
          <h1>{welcomeText}</h1>
          <Spinner show={show} text="Cargando.." />
        </Col>
      </Row>
    </div>
  );
};

Component.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};

export default Component;

/* eslint-disable react/no-children-prop */
import React from 'react';
import { Spinner } from 'reactstrap';
import '../../css/Spinner.css';
import PropTypes from 'prop-types';

const index = ({ show, text }) => {
  if (show) {
    return (
      <div className="spinner-component-overlay d-flex justify-content-center align-items-center">
        <div className="spinner-content d-flex  align-items-center shadow flex-column justify-content-evenly">
          <Spinner children="" color="danger" className="spinner-loader" />
          <h2 className="spinner-text">{text}</h2>
        </div>
      </div>
    );
  }

  return <></>;
};

export default index;

index.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

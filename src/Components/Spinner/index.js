/* eslint-disable react/no-children-prop */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import fromState from '../../core/selectors';
import '../../css/Spinner.css';

const index = ({ text }) => {
  const show = useSelector(fromState.Login.getRequestFlag);
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
  text: PropTypes.string,
};

index.defaultProps = {
  text: 'Cargando',
};

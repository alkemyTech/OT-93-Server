import React, { useEffect } from 'react';
import swal from 'sweetalert2';
import PropTypes from 'prop-types';
import '../../css/Alert.css';

const Alert = ({ show, title, icon }) => {
  useEffect(() => {
    if (show) {
      swal.fire({
        position: 'center',
        title: `${title}`,
        padding: '1rem 2rem',
        icon: `${icon}`,
        timer: 2500,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
      });
      swal.getContainer().style.zIndex = '3000';
      swal.showLoading();
    }
  }, [show]);

  return <></>;
};

export default Alert;

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

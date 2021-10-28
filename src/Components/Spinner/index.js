import React from "react";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const Spinner = ({ visible, type, height, width, timeout, color }) => {
  return (
    <Loader
      visible={visible}
      type={type}
      color={color}
      height={height}
      width={width}
      timeout={timeout}
    ></Loader>
  );
};

export default Spinner;

Spinner.propTypes = {
  props: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    timeout: PropTypes.number.isRequired,
  }),
};

Spinner.defaultProps = {
  visible: true,
  type: "Oval",
  height: 100,
  width: 100,
  timeout: 2500,
};

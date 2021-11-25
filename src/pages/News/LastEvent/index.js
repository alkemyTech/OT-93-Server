/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './Component';

export default connect(
  (state) => ({
  }),
  (dispatch) => bindActionCreators(
    {
    },
    dispatch,
  ),
)(Component);

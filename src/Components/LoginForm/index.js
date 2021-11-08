/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import {
  submitLoginRequested,
  cleanLoginForm,
} from '../../core/state/Session/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.Login.getLoginForm(state),
    fields: fromState.Login.getLoginFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      submitLoginRequested,
      cleanLoginForm,
    },
    dispatch,
  ),
)(Component);

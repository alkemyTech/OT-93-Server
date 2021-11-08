import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import {
  registerUser,
} from '../../core/state/Users/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.Users.getRegisterForm(state),
    fields: fromState.Users.getRegisterFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      registerUser,
    },
    dispatch,
  ),
)(Component);

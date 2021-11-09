import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import {
  registerUser,
} from '../../core/state/Edit/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.Edit.getRegisterForm(state),
    fields: fromState.Edit.getRegisterFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      registerUser,
    },
    dispatch,
  ),
)(Component);

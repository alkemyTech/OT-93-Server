import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import {
  editUser,
} from '../../core/state/UserEdit/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.UserEdit.getUserEditForm(state),
    fields: fromState.UserEdit.getUserEditFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      editUser,
    },
    dispatch,
  ),
)(Component);

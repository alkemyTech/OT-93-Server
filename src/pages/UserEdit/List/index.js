import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import { fetchUsersRequested, deleteUsers } from '../../../core/state/UserEdit/actions';
import Component from './Component';

export default connect(
  (state) => ({
    list: fromState.UserEdit.getList(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchUsersRequested,
      deleteUsers,
    },
    dispatch,
  ),
)(Component);

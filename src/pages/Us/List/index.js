/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import { fetchMembersRequested } from '../../../core/state/orgMembers/actions';
import Component from './component';
import FromState from '../../../core/selectors';

const mapStateToProps = (state) => ({
  list: FromState.Members.getList(state),
  table: FromState.Members.getTableProps(state),
});

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({
    fetchMembersRequested,
  }, dispatch),
)(Component);

import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import { fetchMembersRequested, deleteMembersRequested } from '../../../core/state/orgMembers/actions';
import Component from './Component';

const mapStateToProps = (state) => ({
  list: fromState.Members.getList(state),
  table: fromState.Members.getTableProps(state),
});

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({
    fetchMembersRequested,
    deleteMembersRequested,
  }, dispatch),
)(Component);

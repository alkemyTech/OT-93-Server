import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import { fetchActivitiesRequested, deleteActivitiesRequested } from '../../../core/state/activities/actions';
import Component from './component';

const mapStateToProps = (state) => ({
  list: fromState.Activities.getList(state),
  table: fromState.Activities.getTableProps(state),
});

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({
    fetchActivitiesRequested,
    deleteActivitiesRequested,
  }, dispatch),
)(Component);

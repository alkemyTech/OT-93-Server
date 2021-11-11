import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import { fetchProjectsRequested } from '../../../core/state/Project/actions';
import Component from './Component';
import fromState from '../../../core/selectors';

const mapStateToProps = (state) => ({
  list: fromState.Projects.getList(state),
  table: fromState.Projects.getTableProps(state),
});

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({
    fetchProjectsRequested,
  }, dispatch),
)(Component);

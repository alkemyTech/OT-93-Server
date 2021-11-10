import {
  connect,
} from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  bindActionCreators,
} from 'redux';
import fromState from '../../../core/selectors';
import {
  fetchSlideRequested,
  deleteSlideRequested,
} from '../../../core/state/Slides/actions';
import Component from './Component';

const mapStateToProps = (state) => ({
  list: fromState.Slides.getList(state),
  table: fromState.Slides.getTableProps(state),
});

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({
    fetchSlideRequested,
    deleteSlideRequested,
  }, dispatch),
)(Component);

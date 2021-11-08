import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import { fetchCategoriesRequested, deleteCategoriesRequested } from '../../../core/state/categories/actions';
import Component from './component';

const mapStateToProps = (state) => ({
  list: fromState.Categories.getList(state),
  table: fromState.Categories.getTableProps(state),
});

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({
    fetchCategoriesRequested,
    deleteCategoriesRequested,
  }, dispatch),
)(Component);

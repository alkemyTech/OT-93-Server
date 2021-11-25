import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import { fetchCategoriesRequested, deleteCategoriesRequested } from '../../../core/state/categories/actions';
import Component from './component';

export default connect(
  (state) => ({
    list: fromState.Categories.getList(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchCategoriesRequested,
      deleteCategoriesRequested,
    },
    dispatch,
  ),
)(Component);

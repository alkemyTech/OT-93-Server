/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import {
  submitCategoriesRequested,
  fetchCategoriesRequested,
} from '../../../core/state/categories/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.Categories.getNewsForm(state),
    fields: fromState.Categories.getNewsFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      submitCategoriesRequested,
      fetchCategoriesRequested,
    },
    dispatch,
  ),
)(Component);

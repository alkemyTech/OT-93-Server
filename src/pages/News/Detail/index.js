/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import { fetchNewsRequested } from '../../../core/state/News/actions';
import Component from './Component';

export default connect(
  (state) => ({
    fields: fromState.News.getNewsForm(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchNewsRequested,
    },
    dispatch,
  ),
)(Component);

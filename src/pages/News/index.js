/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import Component from './Component';
import { fetchNewsRequested } from '../../core/state/News/actions';

export default connect(
  (state) => ({
    data: fromState.News.getNews(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchNewsRequested,
    },
    dispatch,
  ),
)(Component);

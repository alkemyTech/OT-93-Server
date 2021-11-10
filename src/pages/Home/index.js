/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import { fetchOrganizationRequested, fetchSlidesRequested } from '../../core/state/Home/actions';
import { fetchNewsRequested } from '../../core/state/News/actions';
import Component from './Component';

export default connect(
  (state) => ({
    organization: fromState.Home.getOrganization(state),
    slides: fromState.Home.getSlides(state),
    news: fromState.News.getNews(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchOrganizationRequested,
      fetchSlidesRequested,
      fetchNewsRequested,
    },
    dispatch,
  ),
)(Component);

/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import Component from './Component';
import { fetchActivitiesRequested } from '../../core/state/activities/actions';

export default connect(
  (state) => ({
    data: fromState.Activities.getNews(state),
    slides: fromState.Activities.getSlides(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchActivitiesRequested,
    },
    dispatch,
  ),
)(Component);

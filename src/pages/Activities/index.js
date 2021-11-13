/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import Component from './Component';
import { fetchActivitiesRequested } from '../../core/state/activities/actions';

export default connect(
  (state) => ({
    data: fromState.Activities.getNews(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchActivitiesRequested,
    },
    dispatch,
  ),
)(Component);

/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import {
  fetchActivitiesRequested,
} from '../../../core/state/activities/actions';
import Component from './Component';

export default connect(
  (state) => ({
    fields: fromState.Activities.getNewsForm(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchActivitiesRequested,
    },
    dispatch,
  ),
)(Component);

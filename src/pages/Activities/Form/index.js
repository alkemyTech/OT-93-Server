/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import {
  submitActivitiesRequested,
  fetchActivitiesRequested,
} from '../../../core/state/activities/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.Activities.getNewsForm(state),
    fields: fromState.Activities.getNewsFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      submitActivitiesRequested,
      fetchActivitiesRequested,
    },
    dispatch,
  ),
)(Component);

/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import {
  submitProjectsRequested,
  fetchProjectsRequested,
} from '../../../core/state/Project/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.Projects.getProjectsForm(state),
    fields: fromState.Projects.getProjectsFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      submitProjectsRequested,
      fetchProjectsRequested,
    },
    dispatch,
  ),
)(Component);

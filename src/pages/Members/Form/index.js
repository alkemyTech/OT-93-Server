/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import {
  fetchMembersRequested, submitMembersRequested,
} from '../../../core/state/orgMembers/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.Members.getMembersForm(state),
    fields: fromState.Members.getMembersFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchMembersRequested,
      submitMembersRequested,
    },
    dispatch,
  ),
)(Component);

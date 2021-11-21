import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import {
  submitOrganizationRequested,
  fetchOrganizationRequested,
} from '../../../core/state/Organization/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.Organization.getOrganization(state),
    fields: fromState.Organization.getOrganizationFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      submitOrganizationRequested,
      fetchOrganizationRequested,
    },
    dispatch,
  ),
)(Component);

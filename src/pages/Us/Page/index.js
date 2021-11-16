/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import { fetchOrganizationRequested } from '../../../core/state/Organization/actions';
import Component from './Component';

export default connect(
  (state) => ({
    organization: fromState.Organization.getOrganization(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchOrganizationRequested,
    },
    dispatch,
  ),
)(Component);

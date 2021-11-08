/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import { fetchOrganizationRequested, fetchSlidesRequested } from '../../core/state/Home/actions';
import Component from './Component';

export default connect(
  (state) => ({
    organization: fromState.Home.getOrganization(state),
    slides: fromState.Home.getSlides(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchOrganizationRequested,
      fetchSlidesRequested,
    },
    dispatch,
  ),
)(Component);

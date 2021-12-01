/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import Component from './Component';
import { fetchTestimonialRequested } from '../../../core/state/Testimonials/actions';

export default connect(
  (state) => ({
    data: fromState.Testimonials.getTestimonial(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchTestimonialRequested,
    },
    dispatch,
  ),
)(Component);

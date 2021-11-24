import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import {
  submitTestimonialRequested,
  fetchTestimonialRequested,
} from '../../../core/state/Testimonials/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.Testimonials.getTestimonialForm(state),
    fields: fromState.Testimonials.getTestimonialFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      submitTestimonialRequested,
      fetchTestimonialRequested,
    },
    dispatch,
  ),
)(Component);

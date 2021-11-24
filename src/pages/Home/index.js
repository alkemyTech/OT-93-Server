/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import { fetchOrganizationRequested } from '../../core/state/Organization/actions';
import { fetchSlideRequested } from '../../core/state/Slides/actions';
import { fetchNewsRequested } from '../../core/state/News/actions';
import { fetchTestimonialRequested } from '../../core/state/Testimonials/actions';
import Component from './Component';

export default connect(
  (state) => ({
    organization: fromState.Organization.getOrganization(state),
    slides: fromState.Slides.getSlide(state),
    slickSettings: fromState.Login.getSlickSettings(state),
    news: fromState.News.getNews(state),
    testimonial: fromState.Testimonials.getTestimonial(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchOrganizationRequested,
      fetchSlideRequested,
      fetchNewsRequested,
      fetchTestimonialRequested,
    },
    dispatch,
  ),
)(Component);

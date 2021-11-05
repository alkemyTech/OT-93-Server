import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import fromState from '../../../core/selectors';
import { fetchTestimonialRequested, deleteTestimonialRequested } from '../../../core/state/Testimonials/actions';
import Component from './Component';

const mapStateToProps = (state) => ({
  list: fromState.Testimonials.getList(state),
  table: fromState.Testimonials.getTableProps(state),
});

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({
    fetchTestimonialRequested,
    deleteTestimonialRequested,
  }, dispatch),
)(Component);

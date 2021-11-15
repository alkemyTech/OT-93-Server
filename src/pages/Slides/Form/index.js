import {
  connect,
} from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  bindActionCreators,
} from 'redux';
import fromState from '../../../core/selectors';
import {
  submitSlideRequested,
  fetchSlideRequested,
} from '../../../core/state/Slides/actions';
import Component from './Component';

export default connect(
  (state) => ({
    form: fromState.Slides.getSlideForm(state),
    fields: fromState.Slides.getSlideFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      submitSlideRequested,
      fetchSlideRequested,
    },
    dispatch,
  ),
)(Component);

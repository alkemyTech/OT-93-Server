/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fromState from '../../core/selectors';
import { fetchContactRequested } from '../../core/state/contact/actions';
import Component from './Component';

export default connect(
  (state) => ({
    contact: fromState.Contact.getContact(state),
    form: fromState.Contact.getContactForm(state),
    fields: fromState.Contact.getContactFields(state),
  }),
  (dispatch) => bindActionCreators(
    {
      fetchContactRequested,
    },
    dispatch,
  ),
)(Component);

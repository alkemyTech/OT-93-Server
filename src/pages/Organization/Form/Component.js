/* eslint-disable no-useless-escape */
/* eslint-disable */

import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { getRoutes } from '../../../utils';
import BackForm from '../../../Components/BackForm';
import {
  REQUIRED,
  INVALID_IMAGE,
  INVALID_URL,
} from '../../../utils/constants';

const backOfficeRoutes = getRoutes('backOffice');

const Component = ({
  form,
  fields,
  submitOrganizationRequested,
  fetchOrganizationRequested,
  history: { push },
}) => {
  const validate = (values) => {
    const errors = {};
    const checkUrl =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
    if (
      !values.name
      || !values.logo
      || !values.short_description
      || !values.long_description
      || !values.facebook_url
      || !values.linkedin_url
      || !values.instagram_url
      || !values.twitter_url
    ) {
      errors.name = REQUIRED;
      errors.logo = REQUIRED;
      errors.short_description = REQUIRED;
      errors.long_description = REQUIRED;
      errors.facebook_url = REQUIRED;
      errors.instagram_url = REQUIRED;
      errors.linkedin_url = REQUIRED;
      errors.twitter_url = REQUIRED;
    }
    if (!/\.(jpg|png)$/i.test(values.logo)) {
      errors.logo = INVALID_IMAGE;
    }
    if (!checkUrl.test(values.facebook_url)) {
      errors.facebook_url = INVALID_URL;
    }
    if (!checkUrl.test(values.instagram_url)) {
      errors.instagram_url = INVALID_URL;
    }
    if (!checkUrl.test(values.linkedin_url)) {
      errors.linkedin_url = INVALID_URL;
    }
    if (!checkUrl.test(values.twitter_url)) {
      errors.twitter_url = INVALID_URL;
    }
    return errors;
  };

  const goBackToList = () => push(backOfficeRoutes.home);

  useEffect(() => {
    fetchOrganizationRequested();
  }, [fetchOrganizationRequested]);

  return (
    <BackForm
      key="NewsForm"
      form={form}
      fields={fields}
      submit={submitOrganizationRequested}
      fetch={fetchOrganizationRequested}
      validate={validate}
      goBack={goBackToList}
    />
  );
};

export default Component;

Component.propTypes = {
  form: PropTypes.shape({}).isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  submitOrganizationRequested: PropTypes.func.isRequired,
  fetchOrganizationRequested: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Component.defaultProps = {
  match: {},
};

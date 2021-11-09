/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react';
import {
  Container,
  Col,
  Row,
} from 'reactstrap';
import BackForm from '../../../Components/BackForm';
import {
  REQUIRED,
} from '../../../utils/constants';
import {
  getRoutes,
} from '../../../utils';

const backOfficeRoutes = getRoutes('backOffice');

const Component = ({
  title,
  form,
  fields,
  submitNewsRequested,
  fetchNewsRequested,
  match,
  history: { push },
}) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name || !values.image || !values.content) {
      errors.name = REQUIRED;
      errors.image = REQUIRED;
      errors.content = REQUIRED;
    }
    return errors;
  };

  const goBackToList = () => push(backOfficeRoutes.news.list);

  return (
        <>
            <h1 className="text-center mb-4">{title}</h1>
            <BackForm
              key="NewsForm"
              form={form}
              fields={fields}
              submit={submitNewsRequested}
              fetch={fetchNewsRequested}
              id={match.params.id}
              validate={validate}
              goBack={goBackToList}
            />
        </>
  );
};

export default Component;

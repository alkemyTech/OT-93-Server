/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import BackForm from '../../Components/BackForm';
import { getRoutes } from '../../utils';

const Component = ({
  title,
  form,
  fields,
  submitActivitiesRequested,
  fetchActivitiesRequested,
  match,
  history: { push },
}) => {
  const backOfficeRoutes = getRoutes('mainRoutes').backOfficeRoutes;

  const goBackToList = () => push(backOfficeRoutes.home);

  return (
    <>
        <h1 className="text-center mb-4">{title}</h1>
            <BackForm
              key="NewsForm"
              form={form}
              fields={fields}
              submit={submitActivitiesRequested}
              fetch={fetchActivitiesRequested}
              id={match.params.id}
              goBack={goBackToList}
            />
    </>
  );
};

export default Component;

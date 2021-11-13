/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ShowSection from '../../Components/ShowSection';
import {  ACTIVITIES, DUMMY_TEXT, CARD_NUMBER } from '../../utils/constants';

const News = ({ fetchActivitiesRequested, data }) => {
  useEffect(() => {
    fetchActivitiesRequested();
  }, [fetchActivitiesRequested]);

  return (
    <ShowSection title={ACTIVITIES} list={data} subtitle={DUMMY_TEXT} cardNumber={CARD_NUMBER} />
  );
};

News.propTypes = {
  fetchActivitiesRequested: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default News;

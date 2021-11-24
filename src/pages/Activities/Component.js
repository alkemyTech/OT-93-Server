import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import ShowSection from '../../Components/ShowSection';
import { ACTIVITIES, DUMMY_TEXT } from '../../utils/constants';

const News = ({ fetchActivitiesRequested, data, slides }) => {
  useEffect(() => {
    fetchActivitiesRequested();
  }, [fetchActivitiesRequested]);

  return (
    <Container>
      <ShowSection
        title={ACTIVITIES}
        list={data}
        subtitle={DUMMY_TEXT}
        cardNumber={slides}
      />
    </Container>
  );
};

News.propTypes = {
  fetchActivitiesRequested: PropTypes.func.isRequired,
  data: PropTypes.object,
  slides: PropTypes.number,
};

export default News;

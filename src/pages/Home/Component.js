import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'reactstrap';
import Title from '../../Components/Title/index';
import Slick from '../../Components/Slick/index';
import {
  LAST_NEWS, TESTIMONIALS, CONTACTS, VIEW_ALL,
} from '../../utils/constants';
import { getRoutes } from '../../utils';
import Slider from '../../Components/Slider';
import '../../css/Home.css';

const { publicRoutes } = getRoutes('mainRoutes');

const Component = ({
  fetchOrganizationRequested,
  fetchSlideRequested,
  fetchNewsRequested,
  fetchTestimonialRequested,
  organization,
  slickSettings,
  slides,
  news,
  testimonial,
}) => {
  useEffect(() => {
    fetchOrganizationRequested();
    fetchSlideRequested();
    fetchNewsRequested();
    fetchTestimonialRequested();
  }, [fetchOrganizationRequested, fetchSlideRequested,
    fetchNewsRequested, fetchTestimonialRequested]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Slider items={slides} />
            <Title
              text={<h1>{organization.welcome_text}</h1>}
              className="mt-3 pb-5"
            />
            <Slick
              settings={slickSettings}
              items={news}
              title={LAST_NEWS}
              showLinks
              links={[TESTIMONIALS, CONTACTS]}
              labelButton={VIEW_ALL}
              routes={publicRoutes}
            />
            <Slick
              settings={slickSettings}
              items={testimonial}
              title={TESTIMONIALS}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

Component.propTypes = {
  fetchOrganizationRequested: PropTypes.func.isRequired,
  fetchSlideRequested: PropTypes.func.isRequired,
  fetchNewsRequested: PropTypes.func.isRequired,
  fetchTestimonialRequested: PropTypes.func.isRequired,
  organization: PropTypes.shape({
    welcome_text: PropTypes.string,
  }).isRequired,
  slickSettings: PropTypes.object.isRequired,
  slides: PropTypes.array.isRequired,
  news: PropTypes.array.isRequired,
  testimonial: PropTypes.array.isRequired,
};

export default Component;

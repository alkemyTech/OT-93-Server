import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'reactstrap';
import Sidebar from '../../Components/Sidenav';
import Spinner from '../../Components/Spinner';
import Slider from '../../Components/Slider';
import Title from '../../Components/Title';
import Slick from '../../Components/Slick';
import '../../css/Home.css';

const Component = ({
  fetchOrganizationRequested,
  fetchSlideRequested,
  fetchNewsRequested,
  fetchTestimonialRequested,
  organization,
  slides,
  news,
  testimonials,
}) => {
  const lastNews = 'Últimas noticias';
  const testimonies = 'Testimonios';
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
            <Sidebar />
            <Spinner show={false} text="cargando" />
            <Slider items={slides} />
            <Title
              text={<h1>{organization.welcome_text}</h1>}
              className="mt-3 pb-5"
            />
            <Slick items={news} title={lastNews} showLinks />
            <Slick items={testimonials} title={testimonies} />
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
  slides: PropTypes.array.isRequired,
  news: PropTypes.array.isRequired,
  testimonials: PropTypes.array.isRequired,
};

export default Component;

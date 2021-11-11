import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'reactstrap';
import Sidebar from '../../Components/Sidenav';
import Spinner from '../../Components/Spinner';
import Title from '../../Components/Title/index';
import Slick from '../../Components/Slick/index';
import {
  LAST_NEWS, TESTIMONIES, CONTACTS, VIEW_ALL,
} from '../../utils/constants';
import { getRoutes } from '../../utils';
import '../../css/Home.css';

const { publicRoutes } = getRoutes('mainRoutes');

const Component = ({
  fetchOrganizationRequested,
  fetchSlideRequested,
  fetchNewsRequested,
  fetchTestimonialRequested,
  organization,
  slickSettings,
  news,
  testimonials,
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
            <Sidebar />
            <Spinner show={false} text="cargando" />
            <Title
              text={<h1>{organization.welcome_text}</h1>}
              className="mt-3 pb-5"
            />
            <Slick
              settings={slickSettings}
              items={news}
              title={LAST_NEWS}
              showLinks
              links={[TESTIMONIES, CONTACTS]}
              labelButton={VIEW_ALL}
              routes={publicRoutes}
            />
            <Slick
              settings={slickSettings}
              items={testimonials}
              title={TESTIMONIES}
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
  news: PropTypes.array.isRequired,
  testimonials: PropTypes.array.isRequired,
};

export default Component;

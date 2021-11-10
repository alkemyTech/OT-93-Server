import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import Sidebar from '../../Components/Sidenav';
import Spinner from '../../Components/Spinner';
import Title from '../../Components/Title/index';
import Slick from '../../Components/Slick/index';
import '../../css/Home.css';

const Component = ({
  fetchOrganizationRequested,
  fetchSlidesRequested,
  fetchNewsRequested,
  organization,
  news,
}) => {
  const testimonies = 'Testimonios';
  const contact = 'Contacto';
  const viewAll = 'Ver todas';

  useEffect(() => {
    fetchOrganizationRequested();
    fetchSlidesRequested();
    fetchNewsRequested();
  }, [fetchOrganizationRequested, fetchSlidesRequested, fetchNewsRequested]);

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
            <Slick items={news} />
            <Row className="news-row">
              <Col
                xs="12"
                md="4"
                className="d-md-flex text-md-start pt-md-2 ps-md-5"
              >
                <Link className="news-link px-2 ps-xl-5 ms-xl-5" to="/">
                  {testimonies}
                </Link>
                <Link className="news-link px-2" to="/">
                  {contact}
                </Link>
              </Col>
              <Col md="4">
                <Button color="primary" className="news-btn my-3 mt-md-0">
                  {viewAll}
                </Button>
              </Col>
            </Row>
            <Title
              text={<h2>{testimonies}</h2>}
              className="mb-5"
            />
            {/* <Slick /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

Component.propTypes = {
  fetchOrganizationRequested: PropTypes.func.isRequired,
  fetchSlidesRequested: PropTypes.func.isRequired,
  fetchNewsRequested: PropTypes.func.isRequired,
  organization: PropTypes.shape({
    welcome_text: PropTypes.string,
  }).isRequired,
  news: PropTypes.array.isRequired,
};

export default Component;

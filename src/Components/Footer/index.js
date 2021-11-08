/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import filter from 'lodash/filter';
import '../../css/Footer.css';
import {
  Container, Row, Media, Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../utils/assets/LOGO.png';
import { socialMediaInfo, campaignLinks } from '../../utils/selectors';

const Footer = ({ campaignInfo }) => (
  <footer className="text-center bg-light container-fluid pt-3">
    <Container>
      <Row>
        <Col lg="3" md="4" sm="8" className="mx-auto">
          <Media src={logo} />
        </Col>
        <Col
          lg="3"
          md="4"
          sm="8"
          className="my-auto d-none d-md-block footer-navigation-list"
        >
          <a
            href="www.google.com"
            className="mb-3 d-inline-block fw-bold text-uppercase"
          >
            ¡Ingresá a Somos Más!
          </a>
          <ul className="list-unstyled d-none d-xxl-block">
            {map(
              filter(
                campaignLinks,
                (campaign) => campaign.label !== campaignInfo,
              ),
              (item) => (
                <li>
                  <Link to={`${item.url}`}>{item.label}</Link>
                </li>
              ),
            )}
          </ul>
        </Col>
        <Col lg="3" md="4" sm="8" className="mx-auto my-auto ">
          <ul className="list-unstyled">
            {map(socialMediaInfo, (item) => (
              <li className="d-lg-flex d-inline d-lg-block align-items-center">
                <a className="text-decoration-none text-dark" href={item.url}>
                  <item.component className={`footer-icon ${item.className}`} />
                </a>
                <p className="d-none d-lg-inline-block mb-0">{item.title}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

Footer.propTypes = {
  campaignInfo: PropTypes.element.isRequired,
};

export default Footer;

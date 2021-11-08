import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import '../css/Footer.css';
import { Container, Row, Col } from 'reactstrap';
import logo from '../utils/assets/LOGO.png';
import { getNavigationFooter, socialMediaInfo } from '../utils/selectors';
import { CONTACT, SITE, LOGO_ALT } from '../utils/constants';

const Footer = () => {
  const navigationItems = getNavigationFooter();
  return (
    <footer className="text-center bg-light container-fluid pt-3">
      <Container>
        <Row>
          <Col lg="3" className="mx-auto align-self-center">
            <img className="footer-logo" alt={LOGO_ALT} src={logo} />
          </Col>
          <Col lg="3" className="mx-auto">
            <h6 className="text-uppercase mb-4 font-weight-bold">{SITE}</h6>
            <ul className="list-unstyled footer-navigation-list">
              {
                map(navigationItems, (item) => (
                  <li className="pb-2">
                    <Link className="text-decoration-none text-dark" to={item.url}>
                      {item.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </Col>
          <Col lg="3" sm="8" xs="12" className="mx-auto">
            <h6 className="text-uppercase mb-4 font-weight-bold">{CONTACT}</h6>
              {
                map(socialMediaInfo, (item) => (
                  <a className="text-decoration-none text-dark" href="www.google.com">
                    <item.component className={`footer-icon ${item.className}`} />
                  </a>
                ))
              }
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

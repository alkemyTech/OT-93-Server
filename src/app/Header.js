import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import map from 'lodash/map';
import { authUser } from '../utils/index';
import '../css/header.css';
import ongLogo from '../images/LOGO-SOMOS MAS.png';
import { getNavigationHeader } from '../utils/selectors';
import { REGISTER, LOGIN, LOGOUT } from '../utils/constants';
import Sidenav from '../Components/Sidenav';

const Header = () => {
  let display = useLocation();
  if (display.pathname === '/school-campaign' || display.pathname === '/toys-campaign') {
    display = 'none';
  } else {
    display = 'block';
  }
  const userAuthenticated = authUser();
  return (
    <nav style={{ display: `${display}` }} className="main-navbar navbar-light container-fluid p-0 mb-5">
      <Container>
        <Row>
          <Col lg={2}>
            <img className="header-logo" src={ongLogo} alt="Logo ONG" />
          </Col>
          <Col lg={7} className="d-none d-md-flex  flex-row align-items-center">
            {map(getNavigationHeader(userAuthenticated), (e, index) => (
              <Link to={`${e.url}`} className="m-2 header-link" key={index}>
                {e.label}
              </Link>
            ))}
          </Col>
          <Col
            lg={3}
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            {!userAuthenticated && (
              <>
                <LinkContainer to="/login">
                  <Button className="m-1 text-white" color="primary">{LOGIN}</Button>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Button className="btn btn-dark m-1">{REGISTER}</Button>
                </LinkContainer>
              </>
            )}

            {userAuthenticated && (
              <button type="button" className="btn header-button-log m-1">
                {LOGOUT}
              </button>
            )}
          </Col>
          <Sidenav />
        </Row>
      </Container>
    </nav>
  );
};

export default Header;

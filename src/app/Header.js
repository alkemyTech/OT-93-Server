import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col,
} from 'reactstrap';
import map from 'lodash/map';
import { authUser } from '../utils/index';
import '../css/header.css';
import ongLogo from '../images/LOGO-SOMOS MAS.png';
import { getNavigationHeader } from '../utils/selectors';
import { REGISTER, LOGIN, LOGOUT } from '../utils/constants';

const Header = () => {
  const userAuthenticated = authUser();
  const checkPath = (path) => {
    if (window.location.pathname === path) {
      return 'header-link-active';
    }
    return 'header-link';
  };
  return (
    <nav className="container-fluid p-0">
      <Container>
        <Row>
          <Col lg={2}>
            <img className="header-logo" src={ongLogo} alt="Logo ONG" />
          </Col>
          <Col lg={7} className="d-flex flex-row align-items-center">
            {map(getNavigationHeader(userAuthenticated), (e, index) => (
              <Link
                to={`${e.url}`}
                className={`m-2  ${checkPath(e.url)}`}
                key={index}
              >
                {e.label}
              </Link>
            ))}
          </Col>
          <Col
            lg={3}
            className="d-flex flex-row align-items-center justify-content-end"
          >
            {!userAuthenticated && (
              <>
                <Link
                  to="/login"
                  color="primary"
                  className="btn header-button-log outline m-1 "
                >
                  {LOGIN}
                </Link>
                <Link
                  to="/register"
                  className="btn header-button-register m-1 "
                >
                  {REGISTER}
                </Link>
              </>
            )}

            {userAuthenticated && (
              <button type="button" className="btn header-button-log m-1">
                {LOGOUT}
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Header;

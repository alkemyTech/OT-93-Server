import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { authUser } from '../utils/index';
import '../css/header.css';
import ongLogo from '../images/LOGO-SOMOS MAS.png';
import map from 'lodash/map';
import { getNavigationHeader } from '../utils/selectors';

const Header = () => {
  const userAuthenticated = authUser();
  const checkPath = (path) => {
    if (window.location.pathname === path) {
      return 'header-link-active';
    }
    return 'header-link';
  };
  console.log(window.location.pathname === '/');
  return (
    <nav className="container-fluid p-0">
      <Container>
        <Row>
          <Col lg={2}>
            <img className="header-logo" src={ongLogo} alt="Logo ONG" />
          </Col>
          <Col lg={7} className="d-flex flex-row align-items-center">
            {map(getNavigationHeader(userAuthenticated), (e, index) => <Link to={`${e.url}`} className={`m-2  ${checkPath(e.url)}`} key={index}>{e.label} </Link>)}
          </Col>
          <Col lg={3} className="d-flex flex-row align-items-center justify-content-end">
            <button className="btn header-button-login m-1 " outline>Log in</button>
            <button className="btn header-button-register m-1 " outline>Registrarse</button>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Header;

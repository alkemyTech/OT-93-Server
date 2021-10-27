import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'
import { authUser } from '../utils/index';
import { publicHeaderDataArray, privateHeaderDataArray } from '../utils/index'
import './header.css'
import ongLogo from '../images/LOGO-SOMOS MAS.png'

const Header = () => {
  const publicLinks = publicHeaderDataArray
  const privateLinks = privateHeaderDataArray
  const userAuthenticated = authUser()
  const checkPath = (path) => {
    if (window.location.pathname === path) {
      return 'header-link-active'
    } else {
      return 'header-link'
    }
  }
  console.log(window.location.pathname === '/')
  return (
    <nav className='container-fluid p-0'>
      <Container>
        <Row>
          <Col lg={2} >
            <img className='header-logo' src={ongLogo} alt="Logo ONG" />
          </Col>
          <Col lg={7} className='d-flex flex-row align-items-center'>
            {userAuthenticated ?
              privateLinks.map(link => {
                return <Link to={link.path} className={`m-2  ${checkPath(link.path)}`}>{link.label}</Link>
              })
              : publicLinks.map(link => {
                return <Link to={link.path} className={`m-2  ${checkPath(link.path)}`}>{link.label} </Link>
              })
            }
          </Col>
          <Col lg={3} className='d-flex flex-row align-items-center justify-content-end'>
            <button className='btn header-button-login m-1 ' outline>Log in</button>
            <button className='btn header-button-register m-1 ' outline >Registrarse</button>
          </Col>
        </Row>
      </Container>
    </nav >
  );
}

export default Header;
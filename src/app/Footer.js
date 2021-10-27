import React from 'react'
import logo from '../logo.svg'
import map from 'lodash/map'
import '../css/Footer.css'
import { getNavigationFooter } from '../utils/selectors'
import { Container, Row, Col } from 'reactstrap'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaAt } from "react-icons/fa"
import { CONTACT, SITE, LOGO_ALT } from '../utils/constants'

import { Link } from 'react-router-dom'


const Footer = () => {
  const navigationItems = getNavigationFooter()
  return (
    <footer className='text-center bg-light container-fluid pt-3'>
      <Container>
        <Row>
          <Col lg="3"  className='mx-auto align-self-center'>
            <img className='footer-logo' alt={LOGO_ALT} src={logo} />
          </Col>
          <Col lg="3" className='mx-auto'>
            <h6 className='text-uppercase mb-4 font-weight-bold'>{SITE}</h6>
            <ul className='list-unstyled footer-navigation-list'>
              {
                map(navigationItems, item =>
                  <li className='pb-2'>
                    <Link className='text-decoration-none text-dark' to={item.url}>
                      {item.label}
                    </Link>
                  </li>
                )
              }
            </ul>
          </Col>
          <Col lg="3" sm='8' xs='12' className='mx-auto'>
            <h6 className='text-uppercase mb-4 font-weight-bold'>{CONTACT}</h6> 
                  <a className='text-decoration-none text-dark' href='www.google.com'>
                  <FaFacebookF className='footer-icon icon-facebook'/> 
                  </a>       
                <a className='text-decoration-none text-dark' href='www.google.com'>
                  <FaInstagram className='footer-icon icon-instagram'/>
                </a>        
                <a className='text-decoration-none text-dark' href='www.google.com'>
                  <FaPhoneAlt className='footer-icon icon-phone'/>
                </a>
                <a className='text-decoration-none text-dark' href='www.google.com'>
                  <FaAt className='footer-icon icon-at'/>
                </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}




export default Footer
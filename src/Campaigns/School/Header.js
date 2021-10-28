import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import schoolCampaignLogo from '../../utils/assets/schoolCampaignLogo.png'
import LOGO from '../../utils/assets/LOGO.png'
import './header.css'

const Header = () => {
  return (
    <Container className='container-fluid p-0 '>
      <Row className='header-container align-items-center'>
        <Col>
          <img className='header-school-logo' src={schoolCampaignLogo} alt="School campaign logo" />
        </Col>
        <Col className='header-slogan justify-content-center'>
          <h1>Slogan</h1>
        </Col>
        <Col className='header-ong-logo justify-content-center'>
          <img src={LOGO} alt="ONG logo" />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
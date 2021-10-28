import React from 'react';
import LOGO from '../../utils/assets/LOGO.png'
import { Container, Row, Col } from 'reactstrap';


const Header = ({ campaignLogo, slogan }) => {
    return (
        <Container className='container-fluid p-0 '>
            <Row className='header-container align-items-center'>
                <Col>
                    <img className='header-school-logo' src={campaignLogo} alt="School campaign logo" />
                </Col>
                <Col className='header-slogan justify-content-center'>
                    <h1>{slogan}</h1>
                </Col>
                <Col className='header-ong-logo justify-content-center'>
                    <img src={LOGO} alt="ONG logo" />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
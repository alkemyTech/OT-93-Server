import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Logo from '../../../utils/assets/LOGO.png';

const Header = ({ campaignLogo, slogan }) => (
    <Container className="container-fluid p-0 ">
        <Row className="header-container align-items-center">
            <Col>
                <img className="header-school-logo" src={campaignLogo} alt="School campaign logo" />
            </Col>
            <Col className="header-slogan justify-content-center">
                <h1>{slogan}</h1>
            </Col>
            <Col className="header-ong-logo justify-content-center">
                <img src={Logo} alt="ONG logo" />
            </Col>
        </Row>
    </Container>
);
Header.propTypes = {
  campaignLogo: PropTypes.element.isRequired,
  slogan: PropTypes.string.isRequired,
};

export default Header;

import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Logo from '../../../utils/assets/LOGO.png';
import Title from '../../Title';

const Header = ({ campaignLogo, slogan }) => (
    <div className="mb-5" style={{ width: '100% !important' }}>
        <Row className="header-container align-items-center">
            <Col>
                <img className="header-campaign-logo" src={campaignLogo} alt="Toys campaign logo" />
            </Col>
            <Col className="header-slogan justify-content-center">
                <Title text={<h3>{slogan}</h3>} />
            </Col>
            <Col className="header-ong-logo justify-content-center">
                <img src={Logo} alt="ONG logo" />
            </Col>
        </Row>
    </div>
);
Header.propTypes = {
  campaignLogo: PropTypes.element.isRequired,
  slogan: PropTypes.string.isRequired,
};

export default Header;

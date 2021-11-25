import React from 'react';
import FooterComponent from '../../Components/Footer/index';
import { SCHOOL_CAMPAIGN } from '../../utils/constants';

const Footer = () => (
    <FooterComponent campaignInfo={SCHOOL_CAMPAIGN} />
);

export default Footer;

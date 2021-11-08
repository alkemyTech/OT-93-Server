import React from 'react';
import FooterComponent from '../../Components/Footer/index';
import { TOYS_CAMPAIGN } from '../../utils/constants';

const Footer = () => (
    <FooterComponent campaignInfo={TOYS_CAMPAIGN} />
);

export default Footer;

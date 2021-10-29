import React from 'react';
import schoolCampaignLogo from '../../utils/assets/schoolCampaignLogo.png';
import '../../css/CampaignHeader.css';
import CampaignHeader from '../../Components/Campaigns/Header/index';

const Header = () => {
  const sloganText = 'Lorem ipsum dolor sit amet.';
  return (
    <CampaignHeader campaignLogo={schoolCampaignLogo} slogan={sloganText} />
  );
};

export default Header;

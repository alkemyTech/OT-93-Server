import React from 'react';
import toysCampaignLogo from '../../utils/assets/toysCampaignLogo.png';
import '../../css/CampaignHeader.css';
import CampaignHeader from '../../Components/Campaigns/Header/index';

const Header = () => {
  const sloganText = 'Lorem ipsum dolor sit amet.';
  return (
    <CampaignHeader campaignLogo={toysCampaignLogo} slogan={sloganText} />
  );
};

export default Header;

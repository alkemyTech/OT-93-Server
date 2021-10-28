import React from 'react';
import schoolCampaignLogo from '../../utils/assets/schoolCampaignLogo.png'
import './header.css'
import CampaignHeader from '../../Components/Campaign/CampaignHeader'

const Header = () => {
  let sloganText = 'Lorem ipsum dolor sit amet.'
  return (
    <CampaignHeader campaignLogo={schoolCampaignLogo} slogan={sloganText} />
  );
}

export default Header;
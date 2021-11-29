import React from 'react';
import { HashRouter } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';
import ScreenDashboard from './ScreenDashboard';

const Backoffice = () => (
  <HashRouter>
    <Sidenav />
    <ScreenDashboard />
  </HashRouter>
);

export default Backoffice;

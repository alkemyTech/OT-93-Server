/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getRoutes } from '../utils';
import Home from '../pages/Home';
import NewForm from '../pages/News/Form';
import NewList from '../pages/News/List';
import Register from '../pages/Register';

import ActivitiesForm from '../pages/Activities/Form';
import ActivitiesList from '../pages/Activities/List';
import ToysCampaign from '../Campaigns/Toys/ToysCampaign';
import SchoolCampaign from '../Campaigns/School/SchoolCampaign';
import CategoriesForm from '../pages/Categories/Form';

const { publicRoutes, mainRoutes, backOfficeRoutes } = getRoutes('mainRoutes');

function Router() {
  return (
    <Switch>
      <Route
        exact
        path={`${backOfficeRoutes.newActivity}/:id`}
        component={ActivitiesForm}
      />
      <Route
        exact
        path={`${backOfficeRoutes.newActivity}`}
        component={ActivitiesForm}
      />
      {/* <Route exact path={publicRoutes.home} component={Home} />
      <Route exact path={publicRoutes.newsForm} component={NewForm} />
      <Route exact path={`${publicRoutes.newsForm}/:id`} component={NewForm} />
      <Route exact path={mainRoutes.home} component={Home} />
      <Route exact path={mainRoutes.newsForm} component={NewForm} />
      <Route exact path={`${mainRoutes.newsForm}/:id`} component={NewForm} />
      <Route exact path={mainRoutes.news} component={NewList} />
      <Route exact path={mainRoutes.register} component={Register} />
      <Route exact path={`${backOfficeRoutes.newActivity}/:id`} component={ActivitiesForm} />
      <Route exact path={backOfficeRoutes.news} component={NewForm} />
      <Route exact path={`${backOfficeRoutes.news}/:id`} component={NewForm} /> */}
    </Switch>
  );
}

export default Router;

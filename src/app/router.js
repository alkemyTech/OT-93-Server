/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getRoutes } from '../utils';
import Home from '../pages/Home';
import NewForm from '../pages/News/Form';
import NewList from '../pages/News/List';
import Register from '../pages/Register';
import News from '../pages/News';
import ActivitiesForm from '../pages/Activities/Form';
import ActivitiesList from '../pages/Activities/List';
import TestimonialsForm from '../pages/Testimonials/Form';
import TestimonialsList from '../pages/Testimonials/List';
import SlidesForm from '../pages/Slides/Form';
import SlidesList from '../pages/Slides/List';
import ToysCampaign from '../Campaigns/Toys/ToysCampaign';
import SchoolCampaign from '../Campaigns/School/SchoolCampaign';
import CategoriesForm from '../pages/Categories/Form';
import ProjectList from '../pages/Project/List';
import ProjectForm from '../pages/Project/Form';
import USmembers from '../pages/Us/List';
import Categories from '../pages/Categories/List';


const { publicRoutes, landingPages, backOfficeRoutes } = getRoutes('mainRoutes');

function Router() {
  return (
    <Switch>
    <Route exact path={publicRoutes.home} component={SlidesList} />
      <Route
        exact
        path={`${backOfficeRoutes.newActivity}`}
        component={ActivitiesForm}
      />
      <Route
        exact
        path={`${backOfficeRoutes.newActivity}`}
        component={ProjectForm}
      />
      <Route exact path={backOfficeRoutes.category} component={Categories} />
      <Route exact path={backOfficeRoutes.categories} component={CategoriesForm} />
      <Route exact path={`${backOfficeRoutes.categories}/:id`} component={CategoriesForm} />
      <Route exact path={publicRoutes.news} component={News} />
      <Route exact path={backOfficeRoutes.slides} component={SlidesList} />
      <Route exact path={`${publicRoutes.newsForm}/:id`} component={NewForm} />
      <Route exact path={publicRoutes.news} component={NewList} />
      <Route exact path={publicRoutes.register} component={Register} />
      <Route exact path={`${backOfficeRoutes.newActivity}/:id`} component={ActivitiesForm} />
    </Switch>
  );
}

export default Router;

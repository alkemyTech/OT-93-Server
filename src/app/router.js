/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getRoutes } from '../utils';

import Alert from '../Components/Alert';
import { INFO, LOADING } from '../utils/constants';

const Home = lazy(() => import('../pages/Home'));
const NewForm = lazy(() => import('../pages/News/Form'));
const NewList = lazy(() => import('../pages/News/List'));
const Register = lazy(() => import('../pages/Register'));
const UserEdit = lazy(() => import('../pages/UserEdit'));
const News = lazy(() => import('../pages/News'));
const ActivitiesForm = lazy(() => import('../pages/Activities/Form'));
const ActivitiesList = lazy(() => import('../pages/Activities/List'));
const TestimonialsForm = lazy(() => import('../pages/Testimonials/Form'));
const TestimonialsList = lazy(() => import('../pages/Testimonials/List'));
const SlidesForm = lazy(() => import('../pages/Slides/Form'));
const SlidesList = lazy(() => import('../pages/Slides/List'));
const ToysCampaign = lazy(() => import('../Campaigns/Toys/ToysCampaign'));
const SchoolCampaign = lazy(() => import('../Campaigns/School/SchoolCampaign'));
const CategoriesForm = lazy(() => import('../pages/Categories/Form'));
const Us = lazy(() => import('../pages/Us/Page'));
const ProjectList = lazy(() => import('../pages/Project/List'));
const ProjectForm = lazy(() => import('../pages/Project/Form'));
const USmembers = lazy(() => import('../pages/Us/List'));
const Categories = lazy(() => import('../pages/Categories/List'));


const { publicRoutes, landingPages, backOfficeRoutes } = getRoutes('mainRoutes');

function Router() {
  return (
    <Suspense fallback={<Alert show title={LOADING} icon={INFO} />}>
    <Switch>
      <Route exact path={publicRoutes.home} component={Home} />
      <Route exact path={publicRoutes.user} component={UserEdit} />
      <Route exact path={`${publicRoutes.user}/:id`} component={UserEdit} />
      <Route
        exact
        path={`${backOfficeRoutes.newActivity}`}
        component={ActivitiesForm}
      />
      <Route exact path={backOfficeRoutes.category} component={Categories} />
      <Route
        exact
        path={backOfficeRoutes.categories}
        component={CategoriesForm}
      />
      <Route
        exact
        path={`${backOfficeRoutes.categories}/:id`}
        component={CategoriesForm}
      />
      <Route exact path={publicRoutes.us} component={Us} />
      <Route exact path={backOfficeRoutes.membersForm} component={MembersForm} />
      <Route exact path={publicRoutes.news} component={News} />
      <Route exact path={publicRoutes.activity} component={Activities} />
      <Route exact path={backOfficeRoutes.slides} component={SlidesList} />
      {/* <Route exact path={publicRoutes.home} component={Home} />
      <Route exact path={publicRoutes.home} component={Home} />
      <Route exact path={publicRoutes.newsForm} component={NewForm} />
      {/* <Route exact path={publicRoutes.newsForm} component={NewForm} />
      <Route exact path={`${publicRoutes.newsForm}/:id`} component={NewForm} />
      <Route exact path={publicRoutes.home} component={Home} />
      <Route exact path={publicRoutes.newsForm} component={NewForm} />
      <Route exact path={`${publicRoutes.newsForm}/:id`} component={NewForm} />
      <Route exact path={publicRoutes.news} component={NewList} />
      <Route exact path={publicRoutes.register} component={Register} />
      <Route exact path={`${backOfficeRoutes.newActivity}/:id`} component={ActivitiesForm} />
    </Switch>
    </Suspense>
  );
}

export default Router;

/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { bounceTransition, mapStyles } from '../utils/animatedSwitch';
import { getRoutes, authUser } from '../utils';
import Alert from '../Components/Alert';
import { INFO, LOADING } from '../utils/constants';

const userAuthenticated = authUser();
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
const MembersForm = lazy(() => import('../pages/Members/Form'));
const MembersList = lazy(() => import('../pages/Members/List'));
const USmembers = lazy(() => import('../pages/Us/List'));
const Categories = lazy(() => import('../pages/Categories/List'));
const Donations = lazy(() => import('../pages/Donations'));
const LastEvent = lazy(() => import('../pages/News/LastEvent'));
const Thanks = lazy(() => import('../pages/Thanks'));
const UserList = lazy(() => import('../pages/UserEdit/List'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../Components/NotFound'));
const NewsDetail = lazy(() => import('../pages/News/Detail/index'));
const OrganizationForm = lazy(() => import('../pages/Organization/Form'));
const Organization = lazy(() => import('../pages/Organization/Admin'));

const { publicRoutes, landingPages, backOfficeRoutes } = getRoutes('mainRoutes');
function Router() {
  return (
    <Suspense fallback={<Alert show title={LOADING} icon={INFO} />}>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="switch-wrapper"
      >
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
        <Route
          exact
          path={backOfficeRoutes.membersForm}
          component={MembersForm}
        />
        <Route
          exact
          path={`${backOfficeRoutes.membersForm}/:id`}
          component={MembersForm}
        />
        <Route exact path={backOfficeRoutes.members} component={MembersList} />
        <Route exact path={publicRoutes.news} component={News} />
        <Route exact path={backOfficeRoutes.slides} component={SlidesList} />
        <Route exact path={publicRoutes.donate} component={Donations} />
        <Route exact path={publicRoutes.thanks} component={Thanks} />
        <Route exact path={publicRoutes.contact} component={Contact} />
        <Route exact path={backOfficeRoutes.newsForm} component={NewForm} />
        <Route
          exact
          path={`${backOfficeRoutes.newsForm}/:id`}
          component={NewForm}
        />
        <Route exact path={publicRoutes.news} component={LastEvent} />
        <Route exact path={backOfficeRoutes.news} component={NewList} />
        <Route exact path={`${publicRoutes.news}/:id`} component={NewsDetail} />
        <Route exact path={publicRoutes.contact} component={Contact} />
        {userAuthenticated ? <Redirect from="/register" to="/" /> : <Route exact path={publicRoutes.register} component={Register} />}
        <Route component={NotFound} />
        <Route exact path={backOfficeRoutes.organization} component={Organization} />
        <Route exact path={backOfficeRoutes.organizationform} component={OrganizationForm} />
      </AnimatedSwitch>
    </Suspense>
  );
}
export default Router;

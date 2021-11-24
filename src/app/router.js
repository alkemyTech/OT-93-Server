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
const Contact = lazy(() => import('../pages/Contact'));
// const ContactForm = lazy(() => import('../Components/ContactForm'));
const NewsForm = lazy(() => import('../pages/News/Form'));
const NewsList = lazy(() => import('../pages/News/List'));
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
const Thanks = lazy(() => import('../pages/Thanks'));
const NotFound = lazy(() => import('../Components/NotFound'));
const NewsDetail = lazy(() => import('../pages/News/Detail/index'));

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
        <Route exact path={backOfficeRoutes.newsForm} component={NewsForm} />
        <Route
          exact
          path={`${backOfficeRoutes.newsForm}/:id`}
          component={NewsForm}
        />
        <Route exact path={backOfficeRoutes.news} component={NewsList} />
        <Route exact path={`${publicRoutes.news}/:id`} component={NewsDetail} />
        <Route exact path={publicRoutes.contact} component={Contact} />

        <Route exact path={publicRoutes.register}>
          {userAuthenticated ? <Redirect to={publicRoutes.home} /> : <Register />}
        </Route>

        <Route component={NotFound} />
      </AnimatedSwitch>
    </Suspense>
  );
}
export default Router;

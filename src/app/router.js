/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getRoutes } from '../utils';
import Home from '../pages/Home';
import NewForm from '../pages/News/Form';
import NewList from '../pages/News/List';
import ActivitiesForm from '../pages/Activities/Form';
import ActivitiesList from '../pages/Activities/List';
// import ActivitiesForm from '../Components/Activities/ActivitiesForm';
// import CategoriesForm from '../Components/Categories/CategoriesForm';
// import NewsForm from '../Components/News/NewsForm';
// import SlidesForm from '../Components/Slides/SlidesForm';
// import TestimonialForm from '../Components/Testimonials/TestimonialsForm';
// import UserForm from '../Components/Users/UsersForm';
// import MembersForm from '../Components/Members/MembersForm';
// import ProjectsForm from '../Components/Projects/ProjectsForm';
import ToysCampaign from '../Campaigns/Toys/ToysCampaign';
import SchoolCampaign from '../Campaigns/School/SchoolCampaign';

const { backOfficeRoutes } = getRoutes('mainRoutes');

function Router() {
  return (
    <Switch>
      <Route exact path={backOfficeRoutes.home} component={ActivitiesList} />
      <Route exact path={backOfficeRoutes.newActivity} component={ActivitiesForm} />
       {/* <Route exact path={backOfficeRoutes.activities} component={ActivitiesList} /> */}
      <Route exact path={`${backOfficeRoutes.newActivity}/:id`} component={ActivitiesForm} />
     {/* <Route exact path={`${mainRoutes.newsForm}/:id`} component={NewForm} />
       <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} /> */}
    </Switch>
  );
}

export default Router;

const mainRoutes = {
  backOfficeRoutes: {
    home: '/',
    news: '/create-news',
    activities: '/activity',
    newActivity: '/create-activity',
    categories: '/create-category',
    testimonials: '/testimonials',
    testimonialform: '/create-testimonials',
    organization: '/create-organization',
    slides: '/slides',
    slideform: '/backoffice/create-slide',
    users: '/create-user',
    members: '/create-member',
  },
  publicRoutes: {
    home: '/',
    organization: '/organizations',
    activity: '/activities',
    news: '/news',
    testimonial: '/testimonials',
    contact: '/contact',
    contribute: '/contribute',
    category: '/categories',
    slides: '/slides',
    user: '/users',
    member: '/members',
    us: '/us',
    novelty: '/novelty',
    editProfile: '/editProfile',
    backOffice: '/backOffice',
    register: '/register',
  },
  landingPages: {
    toysCampaign: '/toys-campaign',
    schoolCampaign: '/school-campaign',
  },
};

export default {
  mainRoutes,
};

import {
  FaFacebookF, FaInstagram, FaPhoneAlt, FaAt, FaTwitter,
} from 'react-icons/fa';
import { getRoutes } from './index';

const { publicRoutes, landingPages } = getRoutes('mainRoutes');
const { backOfficeRoutes } = getRoutes('mainRoutes');

export const getNavigationBackOffice = () => {
  const navigationBackOffice = [
    {
      home: '/',
      label: 'Home',
      url: `${backOfficeRoutes.home}`,
    },
    {
      name: 'activities',
      label: 'actividades',
      url: `${backOfficeRoutes.activities}`,
    },
    {
      name: 'create activities',
      label: 'crear actividades',
      url: `${backOfficeRoutes.newActivity}`,
    },
    {
      name: 'categories',
      label: 'categorias',
      url: `${backOfficeRoutes.categories}`,
    },

    {
      name: 'slides',
      label: 'galeria',
      url: `${backOfficeRoutes.slides}`,
    },
    {
      name: 'members',
      label: 'miembros',
      url: `${backOfficeRoutes.members}`,
    },
    {
      name: 'news',
      label: 'noticias',
      url: `${backOfficeRoutes.news}`,
    },
    {
      name: 'organization',
      label: 'organizacion',
      url: `${backOfficeRoutes.organization}`,
    },

    {
      name: 'testimonials',
      label: 'testimonios',
      url: `${backOfficeRoutes.testimonials}`,
    },
    {
      name: 'users',
      label: 'usuarios',
      url: `${backOfficeRoutes.users}`,
    },
  ];
  return navigationBackOffice;
};

export const getNavigationFooter = () => {
  const navigationFooter = [
    {
      name: 'news',
      label: 'Noticias',
      url: publicRoutes.news,
    },
    {
      name: 'activities',
      label: 'Actividades',
      url: publicRoutes.activities,
    },
    {
      name: 'testimonials',
      label: 'Testimonios',
      url: publicRoutes.testimonials,
    },
    {
      name: 'us',
      label: 'Nosotros',
      url: publicRoutes.us,
    },
    {
      name: 'contact',
      label: 'Contacto',
      url: publicRoutes.contact,
    },
  ];
  return navigationFooter;
};
export const getNavigationHeader = (userAuthentication) => {
  const publicHeader = [
    {
      name: 'Home',
      label: 'Inicio',
      url: publicRoutes.home,

    },
    {
      name: 'Us',
      label: 'Nosotros',
      url: publicRoutes.us,
    },
    {
      name: 'Contact',
      label: 'Contacto',
      url: publicRoutes.contact,

    },
    {
      name: 'Toys campaign',
      label: 'Campaña juguetes',
      url: landingPages.toysCampaign,

    },
    {
      name: 'School campaign',
      label: 'Campaña escolar',
      url: landingPages.schoolCampaign,

    },
  ];
  const publicAndBackOfficeHeader = [
    {
      name: 'Home',
      label: 'Inicio',
      url: publicRoutes.home,

    },
    {
      name: 'Us',
      label: 'Nosotros',
      url: publicRoutes.us,
    },
    {
      name: 'Contact',
      label: 'Contacto',
      url: publicRoutes.contact,

    },
    {
      name: 'Toys campaign',
      label: 'Campaña juguetes',
      url: landingPages.toysCampaign,

    },
    {
      name: 'School campaign',
      label: 'Campaña escolar',
      url: landingPages.schoolCampaign,

    },
  ];
  return userAuthentication
    ? publicAndBackOfficeHeader
    : publicHeader;
};

export const socialMediaInfo = [
  {
    component: FaFacebookF,
    title: 'Facebook',
    url: 'www.facebook.com',
    className: 'icon-facebook',
  },
  {
    component: FaInstagram,
    title: 'Instagram',
    url: 'www.instagram.com',
    className: 'icon-instagram',
  },
  {
    component: FaPhoneAlt,
    title: 'Teléfono',
    url: 'tel:23324524',
    className: 'icon-phone',
  },
  {
    component: FaAt,
    title: 'Email',
    url: 'mailto: somosmas@somosmas.com',
    className: 'icon-at',
  },
  {
    component: FaTwitter,
    title: 'Twitter',
    url: 'Twitter',
    className: 'icon-twitter',
  },
];

export const campaignLinks = [
  {
    label: 'Campaña Juguetes',
    url: landingPages.toysCampaign,
  },
  {
    label: 'Campaña Escolar',
    url: landingPages.schoolCampaign,
  },
];

/* eslint-disable react/react-in-jsx-scope */
import {
  FaFacebookF, FaInstagram, FaPhoneAlt, FaAt, FaTwitter,
} from 'react-icons/fa';
import { BsCardChecklist, BsNewspaper, BsPersonCircle } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { IoListCircleOutline } from 'react-icons/io5';
import { IoIosPeople } from 'react-icons/io';
import { RiSlideshow2Line } from 'react-icons/ri';
import { CgOrganisation } from 'react-icons/cg';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { getRoutes } from './index';

const { publicRoutes, landingPages } = getRoutes('mainRoutes');
const { backOfficeRoutes } = getRoutes('mainRoutes');

export const getNavigationBackOffice = () => {
  const navigationBackOffice = [
    {
      name: 'Home',
      label: 'Home',
      url: `${backOfficeRoutes.home}`,
      icon: <AiOutlineHome className="backoffice-icon" />,
    },
    {
      name: 'activities',
      label: 'Actividades',
      url: `${backOfficeRoutes.activities}`,
      icon: <BsCardChecklist className="backoffice-icon" />,
    },
    {
      name: 'categories',
      label: 'Categorías',
      url: `${backOfficeRoutes.categories}`,
      icon: <IoListCircleOutline className="backoffice-icon" />,
    },
    {
      name: 'slides',
      label: 'Galería',
      url: `${backOfficeRoutes.slides}`,
      icon: <RiSlideshow2Line className="backoffice-icon" />,
    },
    {
      name: 'members',
      label: 'Miembros',
      url: `${backOfficeRoutes.members}`,
      icon: <IoIosPeople className="backoffice-icon" />,
    },
    {
      name: 'news',
      label: 'Novedades',
      url: `${backOfficeRoutes.news}`,
      icon: <BsNewspaper className="backoffice-icon" />,
    },
    {
      name: 'organization',
      label: 'Organización',
      url: `${backOfficeRoutes.organization}`,
      icon: <CgOrganisation className="backoffice-icon" />,
    },
    {
      name: 'testimonials',
      label: 'Testimonios',
      url: `${backOfficeRoutes.testimonials}`,
      icon: <VscCommentDiscussion className="backoffice-icon" />,
    },
    {
      name: 'users',
      label: 'Usuarios',
      url: `${backOfficeRoutes.users}`,
      icon: <BsPersonCircle className="backoffice-icon" />,
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
      url: publicRoutes.activity,
    },
    {
      name: 'testimonials',
      label: 'Testimonios',
      url: publicRoutes.testimonial,
    },
    {
      name: 'us',
      label: 'Nosotros',
      url: publicRoutes.us,
    },
    {
      name: 'news',
      label: 'Novedades',
      url: publicRoutes.news,
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
    {
      name: 'Donate',
      label: 'Contribuir',
      url: publicRoutes.donate,
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

export const getContactFields = () => {
  const contactFields = [
    {
      label: 'Nombre',
      placeholder: 'Name',
      type: 'text',
      id: 'name',
      name: 'name',
      initialValue: 'loco',
    },
    {
      label: 'Email',
      placeholder: 'Email',
      type: 'text',
      id: 'email',
      name: 'email',
    },
    {
      label: 'Teléfono',
      placeholder: 'Teléfono',
      type: 'string',
      id: 'phone',
      name: 'phone',
    },
    {
      label: 'Mensaje',
      placeholder: 'Mensaje',
      type: 'textarea',
      id: 'message',
      name: 'message',
    },
  ];
  return contactFields;
};
export const contactForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

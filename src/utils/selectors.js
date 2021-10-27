import { getRoutes } from './index'

const { publicRoutes } = getRoutes('mainRoutes')
const { backOfficeRoutes } = getRoutes("mainRoutes")

export const getNavigationFooter = () => {
  const navigationFooter = [
    {
      name: 'news',
      label: 'Noticias',
      url: `${publicRoutes.news}`
    },
    {
      name: 'activities',
      label: 'Actividades',
      url: `${publicRoutes.activity}`
    },
    {
      name: 'testimonials',
      label: 'Testimonios',
      url: `${publicRoutes.testimonial}`
    },
    {
      name: 'us',
      label: 'Nosotros',
      url: `${publicRoutes.us}`
    },
    {
      name: 'contact',
      label: 'Contacto',
      url: `${publicRoutes.contact}`
    },
  ]
  return navigationFooter
} 

export const getNavigationBackOffice = () => {
  const navigationBackOffice = [
    {
      name: "news",
      label: "noticias",
      url: `${backOfficeRoutes.news}`,
    },
    {
      name: "activities",
      label: "actividades",
      url: `${backOfficeRoutes.activities}`,
    },
    {
      name: "categories",
      label: "categorias",
      url: `${backOfficeRoutes.categories}`,
    },
    {
      name: "testimonials",
      label: "testimonios",
      url: `${backOfficeRoutes.testimonials}`,
    },
    {
      name: "organization",
      label: "organizacion",
      url: `${backOfficeRoutes.organization}`,
    },
    {
      name: "slides",
      label: "galeria",
      url: `${backOfficeRoutes.slides}`,
    },
    {
      name: "users",
      label: "usuarios",
      url: `${backOfficeRoutes.users}`,
    },
    {
      name: "members",
      label: "miembros",
      url: `${backOfficeRoutes.members}`,
    },
  ];
  return navigationBackOffice;
};
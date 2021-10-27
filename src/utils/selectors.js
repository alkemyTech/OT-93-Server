import { getRoutes } from './index'

const publicRoutes = getRoutes('mainRoutes')

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

// export const getNavigationBackOffice = () => {
//   const navigationBackOffice = [
//     {
//       name: "news",
//       label: "noticias",
//       url: `${backOfficeRouts.news}`,
//     },
//     {
//       name: "activities",
//       label: "actividades",
//       url: `${backOfficeRouts.activities}`,
//     },
//     {
//       name: "categories",
//       label: "categorias",
//       url: `${backOfficeRouts.categories}`,
//     },
//     {
//       name: "testimonials",
//       label: "testimonios",
//       url: `${backOfficeRouts.testimonials}`,
//     },
//     {
//       name: "organization",
//       label: "organizacion",
//       url: `${backOfficeRouts.organization}`,
//     },
//     {
//       name: "slides",
//       label: "galeria",
//       url: `${backOfficeRouts.slides}`,
//     },
//     {
//       name: "users",
//       label: "usuarios",
//       url: `${backOfficeRouts.users}`,
//     },
//     {
//       name: "members",
//       label: "miembros",
//       url: `${backOfficeRouts.members}`,
//     },
//   ];
//   return navigationBackOffice;
// };
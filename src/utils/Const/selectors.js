import { getRoutes } from "./Functions";
import { mainRoutes } from "./navigation";

const { publicRoutes } = getRoutes(mainRoutes);
const { backOfficeRouts } = getRoutes(mainRoutes);

export const getNavigationBackOffice = () => {
  const navigationBackOffice = [
    {
      home: "/",
      label: "Home",
      url: `${backOfficeRouts.home}`,
    },
    {
      name: "activities",
      label: "actividades",
      url: `${backOfficeRouts.activities}`,
    },
    {
      name: "categories",
      label: "categorias",
      url: `${backOfficeRouts.categories}`,
    },

    {
      name: "slides",
      label: "galeria",
      url: `${backOfficeRouts.slides}`,
    },
    {
      name: "members",
      label: "miembros",
      url: `${backOfficeRouts.members}`,
    },
    {
      name: "news",
      label: "noticias",
      url: `${backOfficeRouts.news}`,
    },
    {
      name: "organization",
      label: "organizacion",
      url: `${backOfficeRouts.organization}`,
    },

    {
      name: "testimonials",
      label: "testimonios",
      url: `${backOfficeRouts.testimonials}`,
    },
    {
      name: "users",
      label: "usuarios",
      url: `${backOfficeRouts.users}`,
    },
  ];
  return navigationBackOffice;
};

export const getNavigationFooter = () => {
  const navigationFooter = [
    {
      name: "news",
      label: "Noticias",
      url: publicRoutes.news,
    },
    {
      name: "activities",
      label: "Actividades",
      url: publicRoutes.activities,
    },
    {
      name: "testimonials",
      label: "Testimonios",
      url: publicRoutes.testimonials,
    },
    {
      name: "us",
      label: "Nosotros",
      url: publicRoutes.us,
    },
    {
      name: "contact",
      label: "Contacto",
      url: publicRoutes.contact,
    },
  ];
  return navigationFooter;
};

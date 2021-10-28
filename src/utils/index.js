import Swal from "sweetalert2";
import get from "lodash/get";
import isArray from "lodash/isArray";
import pick from "lodash/pick";
import noop from "lodash/noop";
import routeContent from "./navigation";

export const getRoutes = (entity) => {
  if (isArray(entity)) {
    return pick(routeContent, entity);
  }
  if (entity) {
    return get(routeContent, entity);
  }

  return routeContent;
};

export function swalConfirmAction(
  icon,
  title,
  text,
  confirmButtonText,
  cancelButtonText,
  actionConfirm,
  CancelConfirm = noop
) {
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    reverseButtons: true,
    confirmButtonText,
    cancelButtonText,
  }).then((result) => {
    if (!result.value) {
      return CancelConfirm();
    }
    return actionConfirm();
  });
}

export const authUser = () => {
  if (localStorage.token === undefined) {
    return false
  } else {
    return true
  }
}
const mainRoutes = getRoutes('mainRoutes');

export const publicHeaderDataArray = [
  {
    name: 'Home',
    label: 'Inicio',
    path: mainRoutes.home,

  },
  {
    name: 'About us',
    label: 'Nosotros',
    path: mainRoutes.aboutUs,
  },
  {
    name: 'Contact',
    label: 'Contacto',
    path: mainRoutes.contact,

  },
  {
    name: 'Toys campaign',
    label: 'Campaña juguetes',
    path: mainRoutes.toysCampaign,

  },
  {
    name: 'School campaign',
    label: 'Campaña materiales escolares',
    path: mainRoutes.schoolCampaign,

  }
]
export const privateHeaderDataArray = [
  {
    name: 'Home',
    label: 'Inicio',
    path: mainRoutes.home,

  },
  {
    name: 'About us',
    label: 'Nosotros',
    path: mainRoutes.aboutUs,
  },
  {
    name: 'Contact',
    label: 'Contacto',
    path: mainRoutes.contact,

  },
  {
    name: 'Toys campaign',
    label: 'Campaña juguetes',
    path: mainRoutes.toysCampaign,

  },
  {
    name: 'School campaign',
    label: 'Campaña materiales escolares',
    path: mainRoutes.schoolCampaign,

  }
]

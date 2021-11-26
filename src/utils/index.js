import Swal from 'sweetalert2';
import get from 'lodash/get';
import isArray from 'lodash/isArray';
import pick from 'lodash/pick';
import noop from 'lodash/noop';
import routeContent from './navigation';

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
  CancelConfirm = noop,
) {
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
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
    return false;
  }
  return true;
};

export const noHTML = (text) => {
  const textNoHTML = text?.replace(/<[^>]+>/g, '');
  return textNoHTML;
};

export const createSession = (token) => {
  localStorage.setItem('token', token);
};

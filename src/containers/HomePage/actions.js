import {
  SET_USERNAME,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR
} from './constants';

export function setUsername(name) {
  return {
    type: SET_USERNAME,
    name,
  };
}

export function userLoaded(user) {
  return {
    type: LOAD_USER_SUCCESS,
    user
  };
}

export function userLoadingError(error) {
  return {
    type: LOAD_USER_ERROR,
    error,
  };
}

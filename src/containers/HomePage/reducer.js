import { fromJS } from 'immutable';

import {
  SET_USERNAME,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR
} from './constants';

export const initialState = fromJS({
  username: '',
  user: '',
  error: ''
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''))
    case LOAD_USER_SUCCESS:
      return state.set('user', action.user).set('error', null)
    case LOAD_USER_ERROR:
      return state.set('error', action.error)
    default:
      return state;
  }
}

export default homeReducer;

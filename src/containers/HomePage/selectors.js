import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const selectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const selectUser = () =>
  createSelector(selectHome, homeState => homeState.get('user'));

const selectError = () =>
  createSelector(selectHome, homeState => homeState.get('error'));

export { selectUsername, selectUser, selectError }

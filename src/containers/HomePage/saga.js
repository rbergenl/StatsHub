import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { SET_USERNAME } from './constants';
import { userLoaded, userLoadingError } from './actions';

function* fetchUser({ name }) {
   try {
     const query = `{
       twitter {
         user (identifier: name, identity: "${name}") {
           id
           screen_name
           name
           profile_image_url
           url
           tweets_count
           followers_count
         }
       }
     }
     `;

     const user = yield axios({
       url: 'https://www.graphqlhub.com/graphql',
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       responseType: 'json',
       data: JSON.stringify({ query: query }),
     })
     .then(res => res.data.data.twitter.user);
     if (!user) throw new Error('username not found');
     yield put(userLoaded(user));
   } catch (e) {
      yield put(userLoadingError(e.message));
   }
}

function* homeSaga() {
  yield takeLatest(SET_USERNAME, fetchUser);
}

export default homeSaga;

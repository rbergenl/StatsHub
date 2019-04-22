import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux-immutable';

// reducers
import homeReducer from './containers/HomePage/reducer'

// sagas
import homeSaga from './containers/HomePage/saga';

export default function configureStore() {

  const rootReducer = combineReducers({
    home: homeReducer
  });

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    compose(
     applyMiddleware(sagaMiddleware),
    )
  );

  sagaMiddleware.run(homeSaga)

  return store;
}

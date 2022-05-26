import { legacy_createStore as createReduxStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { run } from 'redux-chill';
import { sagas } from './sagas';
import { app } from './reducer';

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware({
    onError: error => console.log(error, 'Saga error occured!')
  });

  const applied = applyMiddleware(sagaMiddleware);

  const store = createReduxStore(app, composeWithDevTools(applied));

  run(sagaMiddleware, sagas);

  return store;
};

export type State = ReturnType<typeof app>;
export const store = createStore();

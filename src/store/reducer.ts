import { combineReducers } from 'redux';
import { general } from './general';

/**
 * App reducer
 */
const app = combineReducers({
  general
});

export { app };

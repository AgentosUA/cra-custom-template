import { GeneralState } from './state';
import { reducer } from 'redux-chill';
import { startup } from './actions';

/**
 * General state
 */
const general = reducer(new GeneralState()).on(startup.success, state => {
  state.isReady = true;
});

export { general };

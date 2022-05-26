import { Saga } from 'redux-chill';
import { put } from 'redux-saga/effects';
import { startup } from './actions';

/**
 * General saga
 */

class GeneralSaga {
  /**
   * Init all pre-start actions
   */
  @Saga(startup)
  public *startup() {
    yield put(startup.success());
  }
}

export { GeneralSaga };

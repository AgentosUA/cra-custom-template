import { make } from 'redux-chill';
/**
 * Startup application
 */
const startup = make('[general] startup')
  .stage('')
  .stage('success')
  .stage('failure');

export { startup };

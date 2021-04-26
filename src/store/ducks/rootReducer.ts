import { combineReducers } from 'redux';

import todos from './todos';
import user from './user';
import plants from './plants';
import environments from './environments';

export default combineReducers({
  todos,
  user,
  plants,
  environments,
});

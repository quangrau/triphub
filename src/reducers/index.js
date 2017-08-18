import { combineReducers } from 'redux';

// Reducers
import { reducer as form } from 'redux-form';
import session from './session';

const reducers = combineReducers({
  session,
  form
});

export default reducers;

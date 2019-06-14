import { combineReducers } from 'redux';

import jobs from './jobReducer';
import session from './sessionReducer';

export default combineReducers({
  jobs,
  session
});

import { combineReducers } from 'redux';

import jobs from './jobReducer';
import session from './sessionReducer';
import details from './jobDetailReducer';

export default combineReducers({
  jobs,
  session,
  details
});

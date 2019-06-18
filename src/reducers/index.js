import { combineReducers } from 'redux';

import jobs from './jobReducer';
import session from './sessionReducer';
import jobDetail from './jobDetailReducer';

export default combineReducers({
  jobs,
  session,
  jobDetail
});

import { combineReducers } from 'redux';

import session from './sessionReducer';
import jobs from './jobReducer';
import jobDetail from './jobDetailReducer';
import notes from './noteReducer';


export default combineReducers({
  jobs,
  session,
  jobDetail,
  notes
});

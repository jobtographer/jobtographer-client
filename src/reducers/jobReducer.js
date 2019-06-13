import {
  NEW_JOB,
  NEW_JOB_PENDING
} from '../actions/jobsActions';

const initialState = {
  loading: false,
  jobsList: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_JOB_PENDING:
      return { ...state, loading: true };
    case NEW_JOB:
      return { ...state, loading: false, jobsList: [...state.jobsList, action.payload] };
    default:
      return state;
  }
}

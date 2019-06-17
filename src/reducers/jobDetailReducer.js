import { 
  FETCH_JOB_DETAIL, 
  FETCH_JOB_DETAIL_PENDING 
} from '../actions/jobDetailActions';

const initialState = {
  loading: true,
  detail: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_JOB_DETAIL:
      return { ...state, loading: false, detail: action.payload };
    case FETCH_JOB_DETAIL_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}

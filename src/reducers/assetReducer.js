import { NEW_ASSET, FETCH_ASSETS } from '../actions/constants';
import { 
  NEW_RESUME, 
  NEW_COVER_LETTER, 
  NEW_COVER_LETTER_PENDING, 
  NEW_RESUME_PENDING, 
  FETCH_COVER_LETTERS, 
  FETCH_COVER_LETTERS_PENDING, 
  FETCH_RESUMES, 
  FETCH_RESUMES_PENDING 
} from '../actions/constants/assetsConstants';

const initialState = {
  resumes: [],
  coverLetters: [],
  loading: false
};

export function assetReducer(state = initialState, action) {
  switch(action.type) {
    case NEW_RESUME:
      return { ...state, loading: false, resumes: [...state.resumes, action.payload] };
      
    case NEW_RESUME_PENDING: 
      return { ...state, loading: true };

    case FETCH_RESUMES: 
      return { ...state, loading: false, resumes: action.payload };

    case FETCH_RESUMES_PENDING: 
      return { ...state, loading: true };

    case NEW_COVER_LETTER: 
      return { ...state, loading: false, coverLetters: [...state.coverLetters, action.payload]};

    case NEW_COVER_LETTER_PENDING: 
      return { ...state, loading: true };

    case FETCH_COVER_LETTERS:
      return { ...state, loading: false, coverLetters: action.payload };

    case FETCH_COVER_LETTERS_PENDING:
      return { ...state, loading: true };
    
    default:
      return state;
  }
}

import { createAction } from 'promise-middleware-redux';
import { getResume, createAsset, getCoverLetters } from '../services/assetsApi';

export const [
  fetchResumes,
] = createAction('FETCH_RESUME', getResume);

export const [ 
  newResume, 
] = createAction('NEW_RESUME', createAsset);

export const [
  fetchCoverLetters,
] = createAction('FETCH_COVER_LETTER', getCoverLetters);

export const [ 
  newCoverLetter, 
] = createAction('NEW_COVER_LETTER', createAsset);

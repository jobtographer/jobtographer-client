import {
  post,
  get
} from './request';

export const createNote = note => post('/api/v1/notes', note);
export const getNotes = jobId => get(`/api/v1/notes/${jobId}`);


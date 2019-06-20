import {
  post,
  get,
  del
} from './request';

export const createNote = note => post('/api/v1/notes', note);
export const getNotes = jobId => get(`/api/v1/notes/${jobId}`);
export const deleteNote = noteId => del(`/api/v1/notes/${noteId}`);


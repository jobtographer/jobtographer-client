import { createAction } from 'promise-middleware-redux';
import { 
  createNote, 
  getNotes,
  deleteNote 
} from '../services/notesApi';

export const [
  newNote,
] = createAction('NEW_NOTE', createNote);

export const [
  fetchNotes,
] = createAction('FETCH_NOTES', getNotes);

export const [
  removeNote,
] = createAction('DELETE_NOTE', deleteNote);

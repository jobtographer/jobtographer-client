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

// ----- MOCK DATA ----- \\
// const getNotes = () => {	
//   return Promise.resolve([	
//     {	
//       title: '1',	
//       body: 'BODY of note',	
//       job: '1',	
//       author: 'JOHN',	
//       _id: '2000',	
//     },	
//     {	
//       title: 'Note 2',	
//       body: 'body 2',	
//       job: '1',	
//       author: 'JOHN',	
//       _id: '2001',	
//     }
//   ]);	
// };
// --- stop delete here --- \\
// --- stop delete here --- \\

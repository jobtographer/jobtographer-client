import { createAction } from 'promise-middleware-redux';
import { 
// createNote, 
// getNotes 
} from '../services/jobsApi';



// ----- MOCK DATA ----- \\
import { post, get } from '../services/request';
const createNote = note => post('/api/v1/notes', note);
const getNotes = jobId => get(`/api/v1/notes/${jobId}`);
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


export const [
  newNote,
  NEW_NOTE,
  NEW_NOTE_PENDING
] = createAction('NEW_NOTE', createNote);

export const [
  fetchNotes,
  FETCH_NOTES,
  FETCH_NOTES_PENDING
] = createAction('FETCH_NOTES', getNotes);

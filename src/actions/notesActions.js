import { createAction } from 'promise-middleware-redux';
import { 
// createNote, 
// getNotes 
} from '../services/jobsApi';



// import { post, get } from '../services/request';
// const createNote = note => post('/api/v1/notes', note);
// const getNotes = jobId => get(`/api/v1/notes/${jobId}`);


// ----- MOCK DATA ----- \\
const getNotes = () => {	
  return Promise.resolve([	
    {	
      title: '1',	
      body: 'BODY of note',	
      job: '1',	
      author: 'JOHN',	
      _id: '2000',	
    },	
    {	
      title: 'Note 2',	
      body: 'loasljaslkasljkask;jsadsadl;kl kdsjklsdfljksdfljksjlsdlfkjflskjflkdsjflk  sdjflkjdsflkjdsflkjsdlfksjldklsdjls   dljslkfsjlkfslkfsdljfsdlkkljsdflsdsd ljksdflkjsdljksdfjlksdfjlklsjkljkfsdljksdfl jjsfljlksfdljskldfjsfdjlkjlksfdjfsjkljlkfsdj jsfdjsfkldjjkdfshjeksdflhdfsvhjkbendfsjvhjkb wenfsdhjkfbnesdhjkbndsjhjkbnfdshjkbefsdhjkb nelsdhjkbnsdhkjbenljsdhdjkbsnljhjdkblndhjksbd nlfhjskbdfnfhjkdsb',	
      job: '1',	
      author: 'JOHN',	
      _id: '2001',	
    }
  ]);	
};
const createNote = () => {	
  return Promise.resolve(	
    {	
      title: '1',	
      body: 'BODY of note',	
      job: '1',	
      author: 'JOHN',	
      _id: '2000',	
    },	
  );	
};
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

import { NEW_NOTE, NEW_NOTE_PENDING, FETCH_NOTES, FETCH_NOTES_PENDING, DELETE_NOTE, DELETE_NOTE_PENDING } from '../actions/constants/notesConstants';

const initialState = {
  loading: false,
  notesList: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_NOTE_PENDING:
      return { ...state, loading: true };
      
    case NEW_NOTE:
      return { ...state, loading: false, notesList: 
        [...state.notesList, action.payload] };

    case FETCH_NOTES:
      return { ...state, loading: false, notesList: action.payload };

    case FETCH_NOTES_PENDING:
      return { ...state, loading: true };

    case DELETE_NOTE:
      return { ...state, loading: false, notesList: [...state.notesList.filter(note => note._id !== action.payload._id)] };

    case DELETE_NOTE_PENDING: 
      return { ...state, loading: true };
    default: 
      return state;
  }
}

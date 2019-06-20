import assetReducer from './assetReducer';
import { NEW_RESUME, FETCH_RESUMES, NEW_RESUME_PENDING, FETCH_RESUMES_PENDING } from '../actions/constants/assetsConstants';

describe('asset reducer tests', () => {
  const initialState = {
    resumes: [],
    coverLetters: [],
    loading: false
  };

  const addOneNoteToInit = {
    resumes: [
      {
        title: 'my resume',
        body: 'I am good, hire me',
        _id: '12345',
        assetType: 'resume'
      }
    ],
    coverLetters: [],
    loading: false
  };
  const addTwoNotesToInit = {
    resumes: [
      {
        title: 'my resume',
        body: 'I am good, hire me',
        _id: '12345',
        assetType: 'resume'
      },
      {
        title: 'my resume2',
        body: 'I am good, hire me2',
        _id: '56789',
        assetType: 'resume' 
      }
    ],
    coverLetters: [],
    loading: false
  };

  const initLoading = {
    resumes: [],
    coverLetters: [],
    loading: true
  };
  it('adds a new resume', () => {
    expect(assetReducer(initialState, { 
      type: NEW_RESUME, payload: {
        title: 'my resume',
        body: 'I am good, hire me',
        _id: '12345',
        assetType: 'resume'
      } 
    })).toEqual(addOneNoteToInit);
  });
  it('fetches all resumes', () => {
    expect(assetReducer(initialState, { 
      type: FETCH_RESUMES, payload: [
        {
          title: 'my resume',
          body: 'I am good, hire me',
          _id: '12345',
          assetType: 'resume'
        },
        {
          title: 'my resume2',
          body: 'I am good, hire me2',
          _id: '56789',
          assetType: 'resume' 
        }
      ]
    })).toEqual(addTwoNotesToInit);
  });
  it('handles new resume loading', () => {
    expect(assetReducer(initialState, { type: NEW_RESUME_PENDING })).toEqual(initLoading);
  });
  it('handles fetch resume loading', () => {
    expect(assetReducer(initialState, { type: FETCH_RESUMES_PENDING })).toEqual(initLoading);
  });
  it('can add a second resume', () => {
    expect(assetReducer(addOneNoteToInit, { type: NEW_RESUME, payload:         {
      title: 'my resume2',
      body: 'I am good, hire me2',
      _id: '56789',
      assetType: 'resume' 
    } })).toEqual(addTwoNotesToInit);
  });
});

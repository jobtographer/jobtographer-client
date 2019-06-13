import reducer from './jobReducer';

jest.mock('../services/jobsApi.js');


describe('job reducer', ()=>{
  it('handles NEW_JOB action', () => {
    const initialState = {
      loading: true,
      jobsList: []
    };
    const newState = reducer(initialState, {
      type: 'NEW_JOB',
      payload: {
        title: 'title',
        company: 'company',
        jobUrl: 'url',
        location: 'location',
      }
    });
    expect(newState).toEqual({
      loading: false,
      jobsList: [{ title: 'title', company: 'company', jobUrl: 'url', location: 'location' }]
    });
  });

  it('handles NEW_JOB_PENDING action', () => {
    const initialState = {
      loading: false,
      jobsList: []
    };
    const newState = reducer(initialState, {
      type: 'NEW_JOB_PENDING'
    });
    expect(newState).toEqual({
      loading: true,
      jobsList: []
    });
  });
});

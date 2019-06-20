import reducer from './jobDetailReducer';

jest.mock('../services/auth.js');
jest.mock('../services/jobsApi.js');

describe('JOB DETAIL REDUCER TEST', () => {
  const payload = {
    title: 'a job',
    company: 'TopNotch',
    active: true,
    jobDescriptionText: 'a job',
    jobUrl: 'Job.job.com',
    salary: '100k',
    jobLocation: 'S Beaverton',
    tracking: 'interested',
    _id: '1'
  };

  it('handles the FETCH_JOB_DETAIL action', () => {
    const initialState = {
      loading: true,
      detail: {}
    };

    const newState = reducer(initialState, {
      type: 'FETCH_JOB_DETAIL',
      payload: payload
    });
    expect(newState).toEqual({
      loading: false,
      detail: payload
    });
  });

  it('handle the loading detail action', () => {
    const initialState = {
      loading: false,
      detail: {}
    };

    const newState = reducer(initialState, {
      type: 'FETCH_JOB_DETAIL_PENDING',
    });
    expect(newState).toEqual({
      loading: true,
      detail: {}
    });
  });

  it('handles the update job action', () => {
    const initialState = {
      loading: true,
      detail: payload
    };
    const newState = reducer(initialState, {
      type: 'UPDATE_JOB_DETAIL',
      payload: { ...payload, title: 'new title' }
    });
    expect(newState).toEqual({
      loading: false,
      detail: { ...payload, title: 'new title' }
      
    });
  });
  
  it('handle the update detail pending action', () => {
    const initialState = {
      loading: false,
      detail: {}
    };

    const newState = reducer(initialState, {
      type: 'UPDATE_JOB_DETAIL_PENDING',
    });
    expect(newState).toEqual({
      loading: true,
      detail: {}
    });
  });
});

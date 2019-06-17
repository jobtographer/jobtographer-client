import { fetchJobDetail, updateJobDetail } from './jobDetailActions';

describe('JOB DETAIL ACTIONS', () => {
  it('creates an action to fetch the job detail', () => {
    const action = fetchJobDetail('1');

    expect(action).toEqual({
      type: 'FETCH_JOB_DETAIL',
      pendingType: 'FETCH_JOB_DETAIL_PENDING',
      fulfilledType: 'FETCH_JOB_DETAIL_FULFILLED',
      rejectedType: 'FETCH_JOB_DETAIL_REJECTED',
      payload: expect.any(Promise)
    });
  });
  
  it('update action for job detail', () => {
    const action = updateJobDetail('1');

    expect(action).toEqual({
      type: 'UPDATE_JOB_DETAIL',
      pendingType: 'UPDATE_JOB_DETAIL_PENDING',
      fulfilledType: 'UPDATE_JOB_DETAIL_FULFILLED',
      rejectedType: 'UPDATE_JOB_DETAIL_REJECTED',
      payload: expect.any(Promise)
    });
  });
});

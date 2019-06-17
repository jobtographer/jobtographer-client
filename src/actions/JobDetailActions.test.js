import { fetchJobDetail } from './jobDetailActions';

describe('job detail actions', () => {
  it('creates an a tion to fetch the job detail', () => {
    const action = fetchJobDetail('1');

    expect(action).toEqual({
      type: 'FETCH_JOB_DETAIL',
      pendingType: 'FETCH_JOB_DETAIL_PENDING',
      fulfilledType: 'FETCH_JOB_DETAIL_FULFILLED',
      rejectedType: 'FETCH_JOB_DETAIL_REJECTED',
      payload: expect.any(Promise)
    });
  });
});

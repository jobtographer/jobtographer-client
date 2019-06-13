import { newJob } from './jobsActions';

jest.mock('../services/jobsApi.js', () => ({
  createJob() {
    return Promise.resolve([]);
  }
})); 

describe('job actions', () => {
  it('creates an action to create a new job', () => {
    const jobAction = newJob({
      title: 'job title',
      company: 'job company',
      jobUrl: 'url',
    });
    expect(jobAction).toEqual({
      type: 'NEW_JOB',
      pendingType: 'NEW_JOB_PENDING',
      fulfilledType: 'NEW_JOB_FULFILLED',
      rejectedType: 'NEW_JOB_REJECTED',
      payload: expect.any(Promise)
    });
  });
});

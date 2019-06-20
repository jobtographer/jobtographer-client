import { createAction } from 'promise-middleware-redux';
import { createJob, getJobs } from '../services/jobsApi';

export const [
  newJob,
] = createAction('NEW_JOB', createJob);

export const [
  fetchJobs,
] = createAction('FETCH_JOBS', getJobs);

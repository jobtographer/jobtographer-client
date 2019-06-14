import { createAction } from 'promise-middleware-redux';
import { createJob, getJobs } from '../services/jobsApi';

export const [
  newJob,
  NEW_JOB,
  NEW_JOB_PENDING
] = createAction('NEW_JOB', createJob);

export const [
  fetchJobs,
  FETCH_JOBS,
  FETCH_JOBS_PENDING
] = createAction('FETCH_JOBS', getJobs);


import { createAction } from 'promise-middleware-redux';
import { createJob } from '../services/jobsApi';

export const [
  newJob,
  NEW_JOB,
  NEW_JOB_PENDING
] = createAction('NEW_JOB', createJob);


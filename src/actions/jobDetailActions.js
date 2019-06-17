import { createAction } from 'promise-middleware-redux';
import { getJobById } from '../services/jobsApi';

export const [
  fetchJobDetail,
  FETCH_JOB_DETAIL,
  FETCH_JOB_DETAIL_PENDING
] = createAction('FETCH_JOB_DETAIL', getJobById);

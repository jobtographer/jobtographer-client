import { createAction } from 'promise-middleware-redux';
import { getJobById, updateJobById } from '../services/jobsApi';

export const [
  fetchJobDetail,
  FETCH_JOB_DETAIL,
  FETCH_JOB_DETAIL_PENDING
] = createAction('FETCH_JOB_DETAIL', getJobById);

export const [
  updateJobDetail,
  UPDATE_JOB_DETAIL,
  UPDATE_JOB_DETAIL_PENDING
] = createAction('UPDATE_JOB_DETAIL', updateJobById);

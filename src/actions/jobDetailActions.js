import { createAction } from 'promise-middleware-redux';
import { getJobById, updateJobById } from '../services/jobsApi';

export const [
  fetchJobDetail,
] = createAction('FETCH_JOB_DETAIL', getJobById);

export const [
  updateJobDetail,
] = createAction('UPDATE_JOB_DETAIL', updateJobById);	

import { createAction } from 'promise-middleware-redux';
// import { getJobById, updateJobById } from '../services/jobsApi';

import { 
  get, 
  patch 
} from '../services/request';
const getJobById = id => get(`/api/v1/jobs/${id}`);
const updateJobById = job => patch(`/api/v1/jobs/${job._id}`, job);

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

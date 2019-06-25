import { 
  post, 
  get, 
  patch,
  del
} from './request';

export const createJob = job => post('/api/v1/jobs', job);
export const getJobs = () => get('/api/v1/jobs');
export const getJobById = id => get(`/api/v1/jobs/${id}`);
export const updateJobById = job => patch(`/api/v1/jobs/${job._id}`, job);
export const deleteJob = job => del(`/api/v1/jobs/${job}`);

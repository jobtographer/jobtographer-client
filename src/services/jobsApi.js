import { post, get } from './request';

export const createJob = job => post(job);
export const getJobs = () => get();

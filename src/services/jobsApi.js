import { post, get } from './request';

export const createJob = job => post(job);
// export const getJobs = () => get();
// export const getJobById = id => get(`/api/v1/jobs/${id}`);

export const getJobById = () => {
  return Promise.resolve([
    {
      title: 'a job',
      company: 'TopNotch',
      active: true,
      jobDescriptionText: 'a job',
      jobUrl: 'Job.job.com',
      salary: '100k',
      jobLocation: 'S Beaverton',
      tracking: 'interested',
      _id: '1'
    }
  ]);
};
export const getJobs = () => {
  return Promise.resolve([
    {
      title: 'a job',
      company: 'TopNotch',
      active: true,
      jobDescriptionText: 'a job',
      jobUrl: 'Job.job.com',
      salary: '100k',
      jobLocation: 'S Beaverton',
      tracking: 'interested',
      _id: '1'
    }
  ]);
};

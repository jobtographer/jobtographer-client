import { post, get } from './request';

export const createJob = job => post(job);
// export const getJobs = () => get();
// export const getJobById = id => get(`/api/v1/jobs/${id}`);
// export const updateJobById = job => put(`/api/v1/jobs/${job._id}`, job);
// ------- patch instead of put ----------- \\


export const updateJobById = () => {
  return Promise.resolve(
    {
      title: 'new',
      company: 'new Comp',
      active: true,
      jobDescriptionText: 'a job',
      jobUrl: 'Job.job.com',
      salary: '0',
      jobLocation: 'S Beaverton',
      tracking: 'interested',
      _id: '1',
      date: 'new date'
    }
  );
};
export const getJobById = () => {
  return Promise.resolve(
    {
      title: 'a job',
      company: 'TopNotch',
      active: true,
      jobDescriptionText: 'a job',
      jobUrl: 'Job.job.com',
      salary: '100k',
      jobLocation: 'S Beaverton',
      tracking: 'interested',
      _id: '1',
      date: '12/23/1989'
    }
  );
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
      _id: '1',
      date: '12/23/1989'
    }
  ]);
};

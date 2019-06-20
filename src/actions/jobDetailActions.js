import { createAction } from 'promise-middleware-redux';
import { getJobById, updateJobById } from '../services/jobsApi';

export const [
  fetchJobDetail,
] = createAction('FETCH_JOB_DETAIL', getJobById);

export const [
  updateJobDetail,
] = createAction('UPDATE_JOB_DETAIL', updateJobById);	

// const getJobById = () => {	
//   return Promise.resolve(	
//     {	
//       title: 'a job',	
//       company: 'TopNotch',	
//       active: true,	
//       jobDescriptionText: 'a job',	
//       jobUrl: 'Job.job.com',	
//       salary: '100k',	
//       jobLocation: 'S Beaverton',	
//       tracking: 'interested',	
//       _id: '1',	
//       date: '12/23/1989'	
//     }	
//   );	
// };

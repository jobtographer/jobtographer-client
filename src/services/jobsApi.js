import { 
  post, 
  // get, 
  // patch
} from './request';

export const createJob = job => post('/api/v1/jobs', job);
// export const getJobs = () => get('/api/v1/jobs');
// export const getJobById = id => get(`/api/v1/jobs/${id}`);
// export const updateJobById = job => patch(`/api/v1/jobs/${job._id}`, job);

export const createNote = note => post('/api/v1/notes', note);
// export const getNotes = () => get('/api/v1/notes');

export const createAsset = asset => post('/api/v1/assets', asset);
// export const getAssets = () => get('/api/v1/assets');






// ---- mocks ---- \\

export const getNotes = () => {	
  return Promise.resolve([	
    {	
      title: '1',	
      body: 'BODY of note',	
      job: '1',	
      author: 'JOHN',	
      _id: '2000',	
    },	
    {	
      title: 'Note 2',	
      body: 'body 2',	
      job: '1',	
      author: 'JOHN',	
      _id: '2001',	
    }
  ]);	
};

export const getJobById = () => {	
  return Promise.resolve(	
    {	
      title: '1',	
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
      title: '1',	
      company: 'TopNotch',	
      active: true,	
      jobDescriptionText: 'a job',	
      jobUrl: 'Job.job.com',	
      salary: '100k',	
      jobLocation: 'S Beaverton',	
      tracking: 'interested',	
      _id: '2000',	
      date: '12/23/1989'	
    },	
    {	
      title: '2',	
      company: 'TopNotch',	
      active: true,	
      jobDescriptionText: 'a job',	
      jobUrl: 'Job.job.com',	
      salary: '100k',	
      jobLocation: 'S Beaverton',	
      tracking: 'interested',	
      _id: '2001',	
      date: '12/23/1989'	
    },	
    {	
      title: '3',	
      company: 'TopNotch',	
      active: true,	
      jobDescriptionText: 'a job',	
      jobUrl: 'Job.job.com',	
      salary: '100k',	
      jobLocation: 'S Beaverton',	
      tracking: 'interested',	
      _id: '2002',	
      date: '12/23/1989'	
    },	
  ]);	
};

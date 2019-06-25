// jobDetails actions || jobsApi
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

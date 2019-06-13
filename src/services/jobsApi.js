export const createJob = job => {
  return Promise.resolve({
    _id: 'fake id',
    ...job
  });
};

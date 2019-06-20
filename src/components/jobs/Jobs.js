import React from 'react';
import PropTypes from 'prop-types';
import Job from './Job';

function Jobs({ jobs, deleteJob }) {
  const jobList = jobs.map((job) => (
    <li key={job._id}>
      <Job job={job} deleteJob={deleteJob} />
    </li>
  ));
  return (
    <div>
      <ul>
        {jobList}
      </ul>
    </div>
  );
}

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteJob: PropTypes.func.isRequired
};

export default Jobs;

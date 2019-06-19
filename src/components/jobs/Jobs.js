import React from 'react';
import PropTypes from 'prop-types';
import Job from './Job';

function Jobs({ jobs }) {
  console.log(jobs);
  const jobList = jobs.map((job) => (
    // <li key={index}>
    <li key={job._id}>
      <Job job={job} />
    </li>
  ));
  return (
    <ul>
      {jobList}
    </ul>
  );
}

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Jobs;

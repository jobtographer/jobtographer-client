import React from 'react';
import PropTypes from 'prop-types';
import Job from './Job';

function Jobs({ jobs }) {
  const jobList = jobs.map(job => (
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
  jobs: [PropTypes.object]
};

export default Jobs;

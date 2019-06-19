import React from 'react';
import PropTypes from 'prop-types';
import Job from './Job';

function Jobs({ jobs }) {
  const jobList = jobs.map((job) => (
    <li key={job._id}>
      <Job job={job} />
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
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Jobs;

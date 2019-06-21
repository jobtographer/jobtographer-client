import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { Div } from '../dashboardStyledComponents';

function Job({ job, deleteJob }) {
  const { title, date, company, active } = job;
  return (
    <Div>
      <Link to={`/${job._id}`}>
        <h3 style={{ overflow: 'hidden',
          textOverflow: 'ellipsis' }}>{title}</h3>
        <p>{company}</p>
        <p>{date.slice(0, 10)}</p>
        <p>status: {active ? 'active' : 'inactive'}</p>
      </Link>
      <FaTrash size={17} style={{  }} onClick={() => deleteJob(job._id)} />
    </Div>
  );
}
Job.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }),
  deleteJob: PropTypes.func.isRequired
};

export default Job;

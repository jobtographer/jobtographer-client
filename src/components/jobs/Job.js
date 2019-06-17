import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Job({ job }) {
  const { title, date, company, active } = job;
  return (
    <Link to={`/${job._id}`}>
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{date}</p>
      <p>status: {active ? 'active' : 'inactive'}</p>
    </Link>
  );
}
Job.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  })
};

export default Job;

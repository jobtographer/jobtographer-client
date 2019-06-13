import React from 'react';
import PropTypes from 'prop-types';

function Job({ job }) {
  const { title, date, company, status } = job;
  let applicationStatus = 'dead';
  if(status){
    applicationStatus = 'active';
  }
  return (
    <>
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{date}</p>
      <p>status:{applicationStatus}</p>
    </>
  );
}
Job.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  })
};

export default Job;

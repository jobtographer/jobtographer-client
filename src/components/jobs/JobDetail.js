import React from 'react';
import PropTypes from 'prop-types';

function JobDetail({ job }) {
  const { title, company, active, jobDescriptionText, jobUrl, salary, jobLocation, tracking } = job;

  return (
      <>
        <p>{title} </p>
        <p>{company}</p>
        <p>{active}</p>
        <p>{jobDescriptionText}</p>
        <p>{jobUrl}</p>
        <p>{salary}</p>
        <p>{jobLocation}</p>
        <p>{tracking}</p>
      </>
  );
}

JobDetail.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    active: PropTypes.bool,
    jobDescriptionText: PropTypes.string,
    jobUrl: PropTypes.string,
    salary: PropTypes.string,
    jobLocation: PropTypes.string,
    // ENUM ???? 
    tracking: PropTypes.enum
  })
};

export default JobDetail;

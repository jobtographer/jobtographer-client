import React from 'react';
import PropTypes from 'prop-types';

function JobForm({ onChange, onSubmit, submitText, title, company, jobUrl, jobLocation, salary, jobDescriptionText, tracking,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input placeholder='title' name="title" value={title} onChange={onChange} />
      <input placeholder='company' name="company" value={company} onChange={onChange} />
      <input placeholder='posting url' name="jobUrl" value={jobUrl} onChange={onChange} />
      <input placeholder='location' name="jobLocation" value={jobLocation} onChange={onChange} />
      <input placeholder='description' name="jobDescriptionText" value={jobDescriptionText} onChange={onChange} />
      <input placeholder='salary' name="salary" value={salary} onChange={onChange} />

      <select name='tracking' onChange={onChange}>
        {/* <option disabled selected *** is mad *** >application progress</option> */}
        <option value={tracking} name="interested">Interested</option>
        <option value={tracking} name="haveApplied">Applied</option>
        <option value={tracking} name="phoneInterviewed">Phone Interviewed</option>
        <option value={tracking} name="technicalInterviewed">Technical Interview</option>
        <option value={tracking} name="inPersonInterviewed">In Person Interview</option>
        <option value={tracking} name="jobOffer">Job Offer</option>
      </select>

      {/* <button>Add Job</button> */}
      <button>{submitText}</button>
    </form>
  );
}

JobForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string,
  
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  jobLocation: PropTypes.string,
  jobUrl: PropTypes.string,
  salary: PropTypes.string,
  jobDescriptionText: PropTypes.string,
  tracking: PropTypes.string,
};

JobForm.defaultProps = {
  submitText: 'Add Job',
};

export default JobForm;

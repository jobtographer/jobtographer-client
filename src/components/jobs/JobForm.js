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

      <select value={tracking} name='tracking' onChange={onChange}>
        {/* <select defaultValue='DEFAULT' name='tracking' onChange={onChange}> */}
        {/* <option value="DEFAULT" disabled>application progress</option> */}
        <option value="interested" name="interested">Interested</option>
        <option value="haveApplied" name="haveApplied">Applied</option>
        <option value="phoneInterviewed" name="phoneInterviewed">Phone Interviewed</option>
        <option value="technicalInterviewed" name="technicalInterviewed">Technical Interview</option>
        <option value="inPersonInterviewed" name="inPersonInterviewed">In Person Interview</option>
        <option value="jobOffer" name="jobOffer">Job Offer</option>
      </select>

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

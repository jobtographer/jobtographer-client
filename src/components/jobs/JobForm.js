import React from 'react';
import PropTypes from 'prop-types';
import { AddJobForm } from '../dashboardStyledComponents';

function JobForm({ onChange, onSubmit, submitText, title, company, jobUrl, jobLocation, salary, jobDescriptionText, tracking,
  atitle,
  acompany,
  ajobUrl,
  ajobLocation,
  ajobDescriptionText,
  asalary
}) {
  return (
    <AddJobForm onSubmit={onSubmit}>
      <input placeholder={atitle} name="title" value={title} onChange={onChange} />
      <input placeholder={acompany} name="company" value={company} onChange={onChange} />
      <input placeholder={ajobUrl} name="jobUrl" value={jobUrl} onChange={onChange} />
      <input placeholder={ajobLocation} name="jobLocation" value={jobLocation} onChange={onChange} />
      <input placeholder={ajobDescriptionText} name="jobDescriptionText" value={jobDescriptionText} onChange={onChange} />
      <input placeholder={asalary} name="salary" value={salary} onChange={onChange} />

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
    </AddJobForm>
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
  
  atitle: PropTypes.string,
  acompany: PropTypes.string,
  ajobLocation: PropTypes.string,
  ajobUrl: PropTypes.string,
  asalary: PropTypes.string,
  ajobDescriptionText: PropTypes.string,
  atracking: PropTypes.string
};

JobForm.defaultProps = {
  submitText: 'Add Job',
  atitle: 'title',
  acompany: 'company',
  ajobLocation: 'location',
  ajobUrl: 'posting url',
  asalary: 'salary',
  ajobDescriptionText: 'description',
  atracking: 'application progress'
};

export default JobForm;

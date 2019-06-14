import React from 'react';
import PropTypes from 'prop-types';

function JobForm({ onChange, onSubmit, title, company, jobUrl, jobLocation }) {
  return (
    <form onSubmit={onSubmit}>
      <input placeholder= 'title' name="title" value={title} onChange={onChange} />
      <input placeholder= 'company' name="company" value={company} onChange={onChange} />
      <input placeholder= 'job url' name="jobUrl" value={jobUrl} onChange={onChange} />
      <input placeholder = 'location' name="jobLocation" value={jobLocation} onChange={onChange} />
      <button>Add Job</button>
    </form>
  );
}

JobForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  jobLocation: PropTypes.string.isRequired,
  jobUrl: PropTypes.string.isRequired
};

export default JobForm;

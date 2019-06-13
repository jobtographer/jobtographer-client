import React from 'react';
import PropTypes from 'prop-types';

function JobForm({ onChange, onSubmit, date, title, company, jobUrl }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="title" value={title} onChange={onChange} />
      <input name="company" value={company} onChange={onChange} />
      <input name="date" value={date} onChange={onChange} />
      <input name="jobUrl" value={jobUrl} onChange={onChange} />
      <button>Add Job</button>
    </form>
  )
}

JobForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  jobUrl: PropTypes.string.isRequired
};

export default JobForm;

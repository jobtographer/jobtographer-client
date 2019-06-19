import React from 'react';
import PropTypes from 'prop-types';

function JobDetail({ onChange, onSubmit, title, company, jobUrl, jobLocation, salary, jobDescriptionText, tracking,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input placeholder={title} name="title" value={title} onChange={onChange} />
      <input placeholder={company} name="company" value={company} onChange={onChange} />
      <input placeholder={jobUrl} name="jobUrl" value={jobUrl} onChange={onChange} />
      <input placeholder={jobLocation} name="jobLocation" value={jobLocation} onChange={onChange} />
      <input placeholder={jobDescriptionText} name="jobDescriptionText" value={jobDescriptionText} onChange={onChange} />
      <input placeholder={salary} name="salary" value={salary} onChange={onChange} />
      
      <select defaultValue={tracking} name='tracking' onChange={onChange}>
        <option value={tracking} disabled>{tracking}</option>
        <option name="interested">Interested</option>
        <option name="haveApplied">Applied</option>
        <option name="phoneInterviewed">Phone Interviewed</option>
        <option name="technicalInterviewed">Technical Interview</option>
        <option name="inPersonInterviewed">In Person Interview</option>
        <option name="jobOffer">Job Offer</option>
      </select>

      <button>Update Job</button>
    </form>
  );
}

JobDetail.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,

  title: PropTypes.string,
  company: PropTypes.string,
  jobLocation: PropTypes.string,
  jobUrl: PropTypes.string,
  salary: PropTypes.string,
  jobDescriptionText: PropTypes.string,
  tracking: PropTypes.string,
};

export default JobDetail;
































// import React from 'react';
// import PropTypes from 'prop-types';

// function JobDetail({ job }) {
//   const { title, company, active, jobDescriptionText, jobUrl, salary, jobLocation, tracking } = job;

//   return (
//       <>
//         <p>{title} </p>
//         <p>{company}</p>
//         <p>{active}</p>
//         <p>{jobDescriptionText}</p>
//         <p>{jobUrl}</p>
//         <p>{salary}</p>
//         <p>{jobLocation}</p>
//         <p>{tracking}</p>
//       </>
//   );
// }

// JobDetail.propTypes = {
//   job: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     company: PropTypes.string.isRequired,
//     active: PropTypes.bool,
//     jobDescriptionText: PropTypes.string,
//     jobUrl: PropTypes.string,
//     salary: PropTypes.string,
//     jobLocation: PropTypes.string,
//     // ENUM ???? 
//     tracking: PropTypes.string
//   })
// };

// export default JobDetail;

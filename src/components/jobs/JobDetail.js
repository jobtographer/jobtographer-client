import React from 'react';
import PropTypes from 'prop-types';
import styles from '../jobs/jobDetail.css';

function JobDetail({ onChange, onSubmit, title, company, jobUrl, jobLocation, salary, jobDescriptionText, tracking,
}) {
  return (
    <>
      <span className={styles.DetailPage}>

   
        <img className={styles.ImageStripe} src="../../../assets/glow-hexagon-black-orange-white-gradient-1920x1080-c4-000000-ffffff-ff8c00-000000-l2-16-203-a-25-f-6.png"></img>

        <div className={styles.JobDetail} >
          <h1>I want a job as a {title} </h1>
          <form onSubmit={onSubmit}>
            <p className={styles.Title}>Title |
              <input placeholder={title} name="title" value={title} onChange={onChange} />
            </p>

            <p className={styles.Company}>Company |
              <input placeholder={company} name="company" value={company} onChange={onChange} />
            </p>

            <p className={styles.URL}>Job URL |
              <input placeholder={jobUrl} name="jobUrl" value={jobUrl} onChange={onChange} />
            </p>

            <p className={styles.Location}>Job Location |
              <input placeholder={jobLocation} name="jobLocation" value={jobLocation} onChange={onChange} />
            </p>

            <p className={styles.JobDescription}>Job Description |
              <input placeholder={jobDescriptionText} name="jobDescriptionText" value={jobDescriptionText} onChange={onChange} />
            </p>

            <p>Salary |
              <input placeholder={salary} name="salary" value={salary} onChange={onChange} />
            </p>
          
            <p className={styles.Tracker}>Job Progress Tracker | <span>{tracking}</span>
              <select name='tracking' onChange={onChange}>
                {/* <option disabled selected *** is mad *** >application progress</option> */}
                <option value={tracking} name="interested">Interested</option>
                <option value={tracking} name="haveApplied">Applied</option>
                <option value={tracking} name="phoneInterviewed">Phone Interviewed</option>
                <option value={tracking} name="technicalInterviewed">Technical Interview</option>
                <option value={tracking} name="inPersonInterviewed">In Person Interview</option>
                <option value={tracking} name="jobOffer">Job Offer</option>
              </select>
            </p>

            <p className={styles.Notes}>Notes |
              <input placeholder="add notesText in curlies" name="notesText" value="add notesText in curlies" onChange={onChange} />
            </p>

            <button>Update Job</button>
          </form>
        </div>
      </span>
    </>
  );
}

JobDetail.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  jobLocation: PropTypes.string,
  jobUrl: PropTypes.string,
  salary: PropTypes.string,
  jobDescriptionText: PropTypes.string,
  tracking: PropTypes.string,
  
  //   atitle: PropTypes.string,
  //   acompany: PropTypes.string,
  //   ajobLocation: PropTypes.string,
  //   ajobUrl: PropTypes.string,
  //   asalary: PropTypes.string,
  //   ajobDescriptionText: PropTypes.string,
  //   atracking: PropTypes.string
  // };

// JobDetail.defaultProps = {
//   atitle: 'title',
//   acompany: 'company',
//   ajobLocation: 'location',
//   ajobUrl: 'posting url',
//   asalary: 'salary',
//   ajobDescriptionText: 'description',
//   atracking: 'application progress'
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

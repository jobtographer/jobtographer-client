import React from 'react';
import PropTypes from 'prop-types';
import { 
  BackgroundDiv, Form, 
  P, Input,
  TrackerSelect, TrackerSpan,
  Button, ImageStripe
} from './detailStyledComponents';

function JobDetail({ onChange, onSubmit, title, company, jobUrl, jobLocation, salary, jobDescriptionText, tracking,
}) {
  return (
    <>
      <BackgroundDiv>

        <ImageStripe></ImageStripe>
        <Form onSubmit={onSubmit}>
          <h1>Details for {title} </h1>
          <P>Title |
            <Input placeholder={title} name="title" value={title} onChange={onChange} />
          </P>

          <P>Company |
            <Input placeholder={company} name="company" value={company} onChange={onChange} />
          </P>

          <P>Job URL |
            <Input placeholder={jobUrl} name="jobUrl" value={jobUrl} onChange={onChange} />
          </P>

          <P>Job Location |
            <Input placeholder={jobLocation} name="jobLocation" value={jobLocation} onChange={onChange} />
          </P>

          <P>Job Description |
            <Input placeholder={jobDescriptionText} name="jobDescriptionText" value={jobDescriptionText} onChange={onChange} />
          </P>

          <P>Salary |
            <Input placeholder={salary} name="salary" value={salary} onChange={onChange} />
          </P>
        
          <P>Job Progress Tracker | <TrackerSpan>{tracking}</TrackerSpan>
            <TrackerSelect name='tracking' onChange={onChange}>
              {/* <option disabled selected *** is mad *** >application progress</option> */}
              <option value={tracking} name="interested">Interested</option>
              <option value={tracking} name="haveApplied">Applied</option>
              <option value={tracking} name="phoneInterviewed">Phone Interviewed</option>
              <option value={tracking} name="technicalInterviewed">Technical Interview</option>
              <option value={tracking} name="inPersonInterviewed">In Person Interview</option>
              <option value={tracking} name="jobOffer">Job Offer</option>
            </TrackerSelect>
          </P>

          <P>Notes |
            <Input placeholder="{notesText}" name="notesText" value="{notesText}" onChange={onChange} />
          </P>

          <Button>Update Job</Button>
        </Form>
      </BackgroundDiv>
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

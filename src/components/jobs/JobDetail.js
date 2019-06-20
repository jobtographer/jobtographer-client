import React from 'react';
import PropTypes from 'prop-types';
import { 
  BackgroundDiv, Form, 
  P, Input,
  TrackerSelect, H5, H1,
  Button, ImageStripe
} from './detailStyledComponents';
import AllNotes from '../../containers/notes/AllNotes';
import AddNote from '../../containers/notes/AddNote';
import Footer from '../../containers/banners/Footer';
import { UserNavBar } from '../../containers/banners/bannerStyledComponents';

function JobDetail({ onChange, onSubmit, title, company, jobUrl, jobLocation, salary, jobDescriptionText, tracking, resume, coverLetter
}) {
  return (
    <BackgroundDiv>
      <UserNavBar />
      {/* <ImageStripe></ImageStripe> */}
      <Form onSubmit={onSubmit}>
        <H1>Details for {title} </H1>
        <H5>edit sections and click update to save changes</H5>
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

        <P>Resume |
          <Input placeholder={resume} name="resume" value={resume} onChange={onChange} />
        </P>

        <P>Cover Letter |
          <Input placeholder={coverLetter} name="coverLetter" value={coverLetter} onChange={onChange} />
        </P>
        
        <P>Job Progress Tracker |
          <TrackerSelect defaultValue={tracking} name='tracking' onChange={onChange}>
            <option value={tracking} disabled>{tracking}</option>
            <option name="interested">Interested</option>
            <option name="haveApplied">Applied</option>
            <option name="phoneInterviewed">Phone Interviewed</option>
            <option name="technicalInterviewed">Technical Interview</option>
            <option name="inPersonInterviewed">In Person Interview</option>
            <option name="jobOffer">Job Offer</option>
          </TrackerSelect>
        </P>

        <Button>Update Job</Button>
      </Form>
      <div>
        <AllNotes />
        <AddNote />

      </div>

      <Footer />
    </BackgroundDiv>
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
  resume: PropTypes.string,
  coverLetter: PropTypes.string
};

export default JobDetail;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newJob } from '../actions/jobsActions';
import JobForm from '../components/jobs/JobForm';

class AddJob extends PureComponent {
  static propTypes = {
    createJob: PropTypes.func.isRequired
  }
  state = {
    title: '',
    company: '',
    jobUrl: '',
    jobLocation: '',
    jobDescriptionText: '',
    salary: '',
    tracking: '',
    resume: '',
    coverLetter: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { 
      title, 
      company, 
      jobUrl, 
      jobLocation,
      jobDescriptionText,
      salary,
      tracking,
      resume,
      coverLetter
    } = this.state;

    this.props.createJob(
      { 
        title, 
        company, 
        jobUrl, 
        jobLocation,
        jobDescriptionText,
        salary,
        tracking,
        resume,
        coverLetter
      }
    );

    this.setState({ 
      title: '', 
      company: '', 
      jobUrl: '', 
      jobLocation: '', 
      jobDescriptionText: '', 
      salary: '',
      tracking: '',
      resume: '',
      coverLetter: ''
    });
  }

  handleChange = ({ target }) => {
    console.log(this.state);
    this.setState({ [target.name]: target.value });
  }

  render() {

    const { 
      title, 
      company, 
      jobUrl, 
      jobLocation,
      jobDescriptionText,
      salary,
      tracking,
      resume,
      coverLetter
    } = this.state;

    return (
      <JobForm 
        onSubmit={this.handleSubmit} onChange={this.handleChange} 
        title={title} company={company} tracking={tracking} coverLetter={coverLetter}
        jobUrl={jobUrl} jobLocation={jobLocation} resume={resume}
        jobDescriptionText={jobDescriptionText} salary={salary} 
      />
    );
  }
}

const mapDisptachToProps = dispatch => ({
  createJob(job) {
    console.log('job in map disptach to props', job);
    dispatch(newJob(job));
  }
});

export default connect(
  null,
  mapDisptachToProps
)(AddJob);

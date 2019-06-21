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
    tracking: 'interested',
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
      tracking
    } = this.state;

    this.props.createJob(
      { 
        title, 
        company, 
        jobUrl, 
        jobLocation,
        jobDescriptionText,
        salary,
        tracking
      }
    );

    this.setState({ 
      title: '', 
      company: '', 
      jobUrl: '', 
      jobLocation: '', 
      jobDescriptionText: '', 
      salary: '',
      tracking: ''
    });
  }

  handleChange = ({ target }) => {
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
      tracking
    } = this.state;

    return (
      <JobForm 
        onSubmit={this.handleSubmit} onChange={this.handleChange} 
        title={title} company={company} tracking={tracking}
        jobUrl={jobUrl} jobLocation={jobLocation}
        jobDescriptionText={jobDescriptionText} salary={salary} 
      />
    );
  }
}

const mapDisptachToProps = dispatch => ({
  createJob(job) {
    dispatch(newJob(job));
  }
});

export default connect(
  null,
  mapDisptachToProps
)(AddJob);

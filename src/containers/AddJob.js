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
    jobLocation: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, company, jobUrl, jobLocation } = this.state;
    this.props.createJob({ title, company, jobUrl, jobLocation });
    this.setState({ title: '', company: '', jobUrl: '', jobLocation: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, company, jobUrl, jobLocation } = this.state;
    return (
      <JobForm onSubmit={this.handleSubmit} onChange={this.handleChange} 
        title={title} company={company} jobUrl={jobUrl} jobLocation={jobLocation} />
    );
  }
}

const mapDisptachToProps = dispatch =>({
  // createJob is from static propTypes
  createJob(job) {
    // dispatch sends it... newJob is an action
    dispatch(newJob(job));
  }
});

export default connect(
  null,
  mapDisptachToProps
)(AddJob);


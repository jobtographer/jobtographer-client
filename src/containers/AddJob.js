import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newJob } from '../actions/jobsActions';
import JobForm from '../components/jobs/jobForm';

class AddJob extends PureComponent {
  static propTypes = {
    createJob: PropTypes.func.isRequired
  }
  state = {
    title: '',
    company: '',
    jobUrl: '',
    location: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, company, jobUrl } = this.state;
    this.props.createJob({ title, company, jobUrl, location });
    this.setState({ title: '', company: '', jobUrl: '', location: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, company, jobUrl, location } = this.state;
    return (
      <JobForm onSubmit={this.handleSubmit} onChange={this.handleChange} 
        title={title} company={company} jobUrl={jobUrl} location={location} />
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


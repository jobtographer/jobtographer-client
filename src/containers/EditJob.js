import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import JobForm from '../components/jobs/JobForm';
// import updateJobDetail (action)
// import jobDetailSelectors

class EditJob extends PureComponent {
  static propTypes = {
    editJob: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired, 
    company: PropTypes.string.isRequired, 
    jobUrl: PropTypes.string, 
    jobLocation: PropTypes.string,
    jobDescriptionText: PropTypes.string,
    salary: PropTypes.string,
    tracking: PropTypes.string
  }

  state = {
    title: '', 
    company: '', 
    jobUrl: '', 
    jobLocation: '', 
    jobDescriptionText: '', 
    salary: '',
    tracking: ''
  }

  componentDidMount() {
    this.setState({
      title: this.props.title, 
      company: this.props.company, 
      jobUrl: this.props.jobUrl, 
      jobLocation: this.props.jobLocation, 
      jobDescriptionText: this.props.jobDescriptionText, 
      salary: this.props.salary,
      tracking: this.props.tracking
    });
  }
  handleSumbit = event => {
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

    this.props.editJob({ 
      title, 
      company, 
      jobUrl, 
      jobLocation,
      jobDescriptionText,
      salary,
      tracking
    });

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

const mapStateToProps = dispatch => ({
  // selectors 
});

// const mapDispatchToProps = state => ({
//   editJob(job) {
//     dispatch(ACTION(job));
//   }
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditJob);

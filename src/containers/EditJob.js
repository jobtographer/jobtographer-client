import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  getJobDetailTitle, 
  getJobDetailCompany, 
  getJobDetailJobUrl, 
  getJobDetailJobLocation, 
  getJobDetailJobDesciptionText, 
  getJobDetailSalary, 
  getJobDetailTracking 
} from '../selectors/jobDetailSelectors';
import { updateJobDetail } from '../actions/jobDetailActions';
import JobDetail from '../components/jobs/JobDetail';

class EditJob extends PureComponent {
  static propTypes = {
    editJob: PropTypes.func,
    
    title: PropTypes.string, 
    company: PropTypes.string, 
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

    this.props.editJob({ 
      title, 
      company, 
      jobUrl, 
      jobLocation,
      jobDescriptionText,
      salary,
      tracking
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
      <JobDetail
        onSubmit={this.handleSubmit} onChange={this.handleChange} 
        title={title} company={company} tracking={tracking}
        jobUrl={jobUrl} jobLocation={jobLocation}
        jobDescriptionText={jobDescriptionText} salary={salary} 
      />
    );
  }
}

const mapStateToProps = state => ({
  title: getJobDetailTitle(state), 
  company: getJobDetailCompany(state), 
  jobUrl: getJobDetailJobUrl(state), 
  jobLocation: getJobDetailJobLocation(state), 
  jobDescriptionText: getJobDetailJobDesciptionText(state), 
  salary: getJobDetailSalary(state),
  tracking: getJobDetailTracking(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  editJob(job) {
    dispatch(updateJobDetail({ ...job, _id: match.params.id }));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditJob));

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Jobs from '../components/jobs/Jobs';
import { fetchJobs } from '../actions/jobsActions';
import { getJobsSelector, getJobsLoadingSelector } from '../selectors/jobSelectors';

class AllJobs extends PureComponent {
  static propTypes = {
    jobs: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate(prevProps) {
    if(this.props.jobs.length !== prevProps.jobs.length) {
      this.props.fetch();
    }
  }

  render() {
    const { loading, jobs } = this.props;

    if(loading) return <h1>loading...</h1>;

    return <Jobs jobs={jobs} />;
  }
}

const mapStateToProps = state => ({
  jobs: getJobsSelector(state),
  loading: getJobsLoadingSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchJobs());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllJobs);

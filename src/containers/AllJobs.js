import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { getJobs } from '../actions/jobActions';
import Jobs from '../components/jobs/Jobs';

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

    return <Jobs jobs={jobs} />
  }

}

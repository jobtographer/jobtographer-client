import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import JobDetail from '../components/jobs/JobDetail';
// actions
// selectors
// sessionSelectors

class JobById extends PureComponent {
  static propTypes = {
    job: PropTypes.object,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch;
  }

  render() {
    const { job, loading } = this.props;
    if(loading) return <h1>Loading...</h1>;

    return <JobDetail job={job} />;
  }
}

const mapStateToProps = state => ({
  job: // selectors here
  loading: // selectors here
});

const mapDispatchToProps = (dipatch, { match }) => ({
  fetch() {
    dispatch(fetchJobDetail(match.params.id))
    // fetchJobDetail ???? action 
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobById);

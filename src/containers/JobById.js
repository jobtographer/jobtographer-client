import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getJobDetail, getJobDetailLoading } from '../selectors/jobDetailSelectors';
import { fetchJobDetail } from '../actions/jobDetailActions';
import EditJob from './EditJob';

class JobById extends PureComponent {
  static propTypes = {
    job: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading } = this.props;
    if(loading) return <h1>Loading...</h1>;

    return <EditJob />;
  }
}

const mapStateToProps = state => ({
  job: getJobDetail(state),
  loading: getJobDetailLoading(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  fetch() {
    dispatch(fetchJobDetail(match.params.id));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(JobById));

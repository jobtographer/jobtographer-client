import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getJobDetail, getJobDetailLoading } from '../selectors/jobDetailSelectors';
import { fetchJobDetail } from '../actions/jobDetailActions';
import EditJob from './EditJob';
import loadingImg from '../../assets/loading1.png';
import { LoadSpinner } from '../components/jobs/detailStyledComponents';

class JobById extends PureComponent {
  static propTypes = {
    job: PropTypes.object,
    fetch: PropTypes.func,
    loading: PropTypes.bool
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading } = this.props;
    if(loading) return <LoadSpinner><img src={loadingImg} /></LoadSpinner>;

    return <EditJob  />;
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

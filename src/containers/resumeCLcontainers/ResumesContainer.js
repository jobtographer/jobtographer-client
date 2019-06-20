import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Resumes from '../../components/resumeCL/Resume';
import { getResumes, getAssetsLoading } from '../../selectors/assetsSelectors';
import { fetchResumes } from '../../actions/assetsActions';
import { connect } from 'react-redux';


class AllResumes extends PureComponent {
  static propTypes = {
    resumes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate(prevProps) {
    if(this.props.resumes !== prevProps.resumes.length) {
      this.props.fetch();
    }
  }

  render() {
    const { loading, resumes } = this.props;
    if(loading) return <h1>loading...</h1>;

    return (
      <Resumes resumes={resumes} />
    );
  }
}

const mapStateToProps = state => ({
  resumes: getResumes(state),
  loading: getAssetsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchResumes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllResumes);

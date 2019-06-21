import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CoverLetters from '../../components/resumeCL/CoverLetter';
import { getCoverLetters, getAssetsLoading } from '../../selectors/assetsSelectors';
import { fetchCoverLetters } from '../../actions/assetsActions';
import { connect } from 'react-redux';

class AllCoverLetters extends PureComponent {
  static propTypes = {
    coverLetters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate(prevProps) {
    if(this.props.coverLetters !== prevProps.coverLetters.length) {
      this.props.fetch();
    }
  }
  render() {
    const { loading, coverLetters } = this.props;
    if(loading) return <h1>loading...</h1>;

    return (
      <CoverLetters coverLetters={coverLetters} />
    );
  }
}

const mapStateToProps = state => ({
  coverLetters: getCoverLetters(state),
  loading: getAssetsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCoverLetters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCoverLetters);

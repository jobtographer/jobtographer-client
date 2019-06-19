import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notes from '../../components/notes/Notes';
import { fetchNotes } from '../../actions/notesActions';
import { getNotesLoadingSelector, getNotesSelector } from '../../selectors/noteSelectors';

class AllNotes extends PureComponent {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate(prevProps) {
    if(this.props.notes.length !== prevProps.notes.length) {
      this.props.fetch();
    }
  }

  render() {
    const { loading, notes } = this.props;
    if(loading) return <h1>loading...</h1>;

    return <Notes notes={notes} />;
  }
}
const mapStateToProps = state => ({
  notes: getNotesSelector(state),
  loading: getNotesLoadingSelector(state)
});
  
const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  }
});
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);

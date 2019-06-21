import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notes from '../../components/notes/Notes';
import { fetchNotes, removeNote } from '../../actions/notesActions';
import { getNotesLoadingSelector, getNotesSelector } from '../../selectors/noteSelectors';
import { withRouter } from 'react-router-dom';

class AllNotes extends PureComponent {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    delete: PropTypes.func.isRequired
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
    if(loading) return <h1>...loading</h1>;

    return <Notes notes={notes} deleteNote={this.props.delete} />;
  }
}
const mapStateToProps = state => ({
  notes: getNotesSelector(state),
  loading: getNotesLoadingSelector(state)
});
  
const mapDispatchToProps = (dispatch, { match }) => ({
  fetch() {
    dispatch(fetchNotes(match.params.id));
  },
  delete(noteId) {
    dispatch(removeNote(noteId));
  }
});
  
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes));

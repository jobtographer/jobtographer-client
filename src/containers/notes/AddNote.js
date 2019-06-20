import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newNote } from '../../actions/notesActions';
import NoteForm from '../../components/notes/NoteForm';
import { withRouter } from 'react-router-dom';


class AddNote extends PureComponent {
  static propTypes = {
    createNote: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const jobId = this.props.match.params.id;
    const { title, body } = this.state;
    this.props.createNote({ title, body, job: jobId });

    this.setState({ 
      title: '',
      body: ''
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, body } = this.state;
    return (
      <NoteForm title={title} body={body}
        onSubmit={this.handleSubmit} onChange={this.handleChange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createNote(note) {
    dispatch(newNote(note));
  }
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(AddNote));

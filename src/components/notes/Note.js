import React from 'react';
import PropTypes from 'prop-types';
import { NoteDiv } from '../notes/notesStyledComponents';
import { FaTrash } from 'react-icons/fa';

function Note({ note, deleteNote }) {
  const { title, body } = note;
  return (
    <NoteDiv>
      <h3>{title}</h3>
      <p>{body}</p>
      <div style={{ marginLeft: '23.5rem' }}>
        <FaTrash size={17} style={{ alignSelf: 'flex-start' }} onClick={() => deleteNote(note._id)}/>
      </div>
    </NoteDiv>
  );
}
Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }),
  deleteNote: PropTypes.func.isRequired
};

export default Note;

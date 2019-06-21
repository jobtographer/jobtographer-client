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
      <FaTrash size={25} style={{ paddingLeft: '10px' }} onClick={() => deleteNote(note._id)}/>
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

import React from 'react';
import PropTypes from 'prop-types';
import { NoteDiv } from '../notes/notesStyledComponents';

function Note({ note }) {
  const { title, body } = note;
  return (
    <NoteDiv>
      <h3>{title}</h3>
      <p>{body}</p>
    </NoteDiv>
  );
}
Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
};

export default Note;

import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import { AddNotesDiv, NoteUl, NoteLi, H2  } from '../notes/notesStyledComponents';

function Notes({ notes }) {
  const noteList = notes.map(note => (
    <NoteLi key={note._id}>
      <Note note={note} />
    </NoteLi>
  ));
  return (
    <AddNotesDiv>
      <NoteUl>
        <H2>Notes</H2>
        {noteList}
        {noteList}
      </NoteUl>
    </AddNotesDiv>
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Notes;

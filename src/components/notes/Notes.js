import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import { AddNotesDiv, NoteUl, NoteLi, H2, ScrollForm  } from '../notes/notesStyledComponents';

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
        <ScrollForm>
          {noteList}
          {noteList}
        </ScrollForm>
      </NoteUl>
    </AddNotesDiv>
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Notes;

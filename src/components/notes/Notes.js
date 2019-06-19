import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Notes({ notes }) {
  const noteList = notes.map(note => (
    <li key={note._id}>
      <Note note={note} />
    </li>
  ));
  return (
    <div>
      <ul>
        {noteList}
      </ul>
    </div>
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Notes;

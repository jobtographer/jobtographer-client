import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onChange, onSubmit, title, body }) {
  return (
    <form onSubmit={onSubmit}>
      <input placeholder='title' name='title' value={title} onChange={onChange} />
      <textarea placeholder='type here' name='body' value={body} onChange={onChange}/>

      <button>Add Note</button>
    </form>
  );
}

NoteForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

  title: PropTypes.string,
  body: PropTypes.string.isRequired
};

export default NoteForm;

import React from 'react';
import PropTypes from 'prop-types';

function Note({ note }) {
  const { title, body } = note;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
};

export default Note;

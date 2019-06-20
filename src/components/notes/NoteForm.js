import React from 'react';
import PropTypes from 'prop-types';
import { Form, H2, P, Input, TextArea, Button } from './notesStyledComponents';

function NoteForm({ onChange, onSubmit, title, body }) {
  return (
    <Form onSubmit={onSubmit}>
      <H2>Add New Job Notes</H2>
      <P>Note Title |
        <Input placeholder='title' name='title' value={title} onChange={onChange} />
      </P>
      <P>Note Text |
        <TextArea placeholder='type here' name='body' value={body} onChange={onChange}/>
      </P>
      <Button>Add Note</Button>
    </Form>
  );
}

NoteForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

  title: PropTypes.string,
  body: PropTypes.string.isRequired
};

export default NoteForm;

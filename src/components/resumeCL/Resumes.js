import React from 'react';
import PropTypes from 'prop-types';
import Resume from './Resume';

function Resumes({ resumes }) {
  const resumeList = resumes.map((resume) => (
    <li key={resume._id}>
      <Resume resume={resume} />
    </li>
  ));
  return (
    <ul>
      {resumeList}
    </ul>
  );
}

Resumes.propTypes = {
  resumes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Resumes;

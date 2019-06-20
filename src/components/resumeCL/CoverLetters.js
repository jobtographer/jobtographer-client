import React from 'react';
import PropTypes from 'prop-types';
import CoverLetter from './CoverLetter';

function CoverLetters({ coverLetters }) {
  const coverLetterList = coverLetters.map((coverLetter) => (
    <li key={coverLetter._id}>
      <CoverLetter coverLetter={coverLetter} />
    </li>
  ));
  return (
    <ul>
      {coverLetterList}
    </ul>
  );
}

CoverLetters.propTypes = {
  coverLetters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CoverLetters;

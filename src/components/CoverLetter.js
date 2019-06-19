import React from 'react';
import PropTypes from 'prop-types';
import { ClDiv } from './dashboardStyledComponents';

function CoverLetter({ coverLetter }) {
  const { title, body } = coverLetter;
  return (
    <ClDiv>
      <h3>{title}</h3>
      <p>{body}</p>
    </ClDiv>
  );
}

CoverLetter.propTypes = {
  coverLetter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default CoverLetter;

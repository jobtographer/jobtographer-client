import React from 'react';
import PropTypes from 'prop-types';
import { ResumeDiv } from '../dashboardStyledComponents';

function Resume({ resume }) {
  const { title, body } = resume;
  return (
    <>
      <ResumeDiv>
        <h3>{title}</h3>
        <p>{body}</p>
      </ResumeDiv>
      <button>Delete Resume</button>
    </>

  );
}

Resume.propTypes = {
  resume: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default Resume;

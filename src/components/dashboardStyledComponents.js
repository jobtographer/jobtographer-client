import styled from 'styled-components';

export const StyledDashboard = styled.section`
  * {
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
  }

  li a {
    font-family: 'Rubik', sans-serif;
    color: black;
    text-decoration: none;
  }
`;

export const AddJobForm = styled.form`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 80vw;
  padding: 1.25rem;
  margin-left: 15rem;
  margin-top: 2rem;
`;

export const AllJobsDisplay = styled.section`
  border: 2px dashed red;
  color: fuchsia;
  width: auto;
  height: auto;
  padding: 1.25rem;
  margin-top: 20px;
  margin-left: 180px;
`;

export const AboutUsDisplay = styled.section`

`;

export const ResumeDiv = styled.div`

`;

export const ClDiv = styled.div`

`;

import styled from 'styled-components';

export const StyledDashboard = styled.section`
  ul {
    list-style-type: none;
  }

  li a, a {
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
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ul {
    border: solid grey;
    color: fuchsia;
    width: 60vw;
    height: auto;
    padding: 1.25rem;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: yellow;
  }

  li {
    margin: 1rem;
    background: orange;
  }

  p, h3 {
    display: inline-block;
    margin-right: 1rem;
  }
`;

export const AboutUsDisplay = styled.section`

`;

export const ClDiv = styled.div`

`;

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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;
    height: 60vh;

    padding: 1.25rem;
    margin-top: 1rem;

  }

  li {
    border: solid black 4rem;
    background-image: url('../../../assets/orange1.jpg');
    clip-path: polygon(20% 10%, 100% 10%, 100% 90%, 20% 90%, 10% 50%);
    
    width: 60vw;
    margin: -.5em 0 ;

  }
  
  p, h3 {
    color: black;
    font-size: 1.8em;
    display: inline-block;
    margin: 0 0 0 3rem;
  }
`;

export const AboutUsDisplay = styled.section`

`;

export const ClDiv = styled.div`

`;

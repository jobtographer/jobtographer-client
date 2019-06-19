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

export const GeneralNavBar = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid darkorange;
  background-color: #FF9505;
  font-size: 2em;

  img {
    border: solid orange .25rem;
    width: 150px;
    height: auto;
    border-radius: 50%;
    margin-right: 50px;
  }
`;

export const Li1 = styled.li`
  a:hover {
    color: white;
  }
  margin: 1rem;
  margin-left: 50px;
`;

export const Li2 = styled.li`
  a:hover {
    color: white;
  }
  margin: 1rem;
  margin-left: 50px;
`;

export const UserNavBar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  float: left;
  position: fixed;
  bottom: 0;
  background: black;
  color: white;
  width: 5rem;
  height: 50vh;
  margin-top: 2rem;
  clip-path: polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%);
  
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    margin-top: 7rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export const GeneralFooter = styled.footer`
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 0;
  width: 100vw;
  
  font-size: 1.25em;
`;

export const AboutUsDisplay = styled.section`

`;

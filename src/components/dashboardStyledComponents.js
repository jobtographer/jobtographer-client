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

export const Upsidedown = styled.section`
  background-image: url('../../../assets/upsidedown.png');
  background-repeat: repeat-x;
  background-position: -20rem;
  position: absolute;
  z-index: -106;
  top: -34rem;

  height: 100vh;
  width: 100vw;
`;

export const Title = styled.h1`
  position: absolute;
  font-family: 'Righteous', cursive;
  background: -webkit-linear-gradient(black, darkgray);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em;
  font-size: 72px;
  left: 24vw;
  top: 3rem;
  font-size: 6em;
  `;

export const AddJobForm = styled.form`
  display: flex;
  justify-content: center;
  overflow: hidden;

  padding: 1.25rem;
  margin-top: 2rem;

  input, select {
    margin: 0 .1rem;
    font-size: 1.3em;
    width: 9rem;
    box-shadow: 5px 5px 8px rgb(84, 84, 84);
  }
  button {
    background: rgb(84, 84, 84);
    border-radius: 2px;
    color: white;
    font-size: 1.3em;
    margin: 0 2rem;
    transition: .7s;
    :hover {
      background: black;
      color: white;
      transform: scale(1.03);
    }
  }
`;

export const Div = styled.section`
  display: flex;
  justify-content: space-around;
  align-content: center;
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
    box-shadow: 50px 50px 58px black;
    width: 60vw;
    margin: -.5em 0;
    :hover {
      transform: scale(1.02);
    }
  }
  h3{
    margin-left: 5rem;
  }
  p, h3 {
    color: black;
    font-size: 1.3em;
    display: inline-block;
    margin: 1.5rem 0rem 0 0rem;
    width: 11rem;
    height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

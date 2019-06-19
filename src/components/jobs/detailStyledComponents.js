import styled, { createGlobalStyle } from 'styled-components';

//global style is a wrapper in App, see notes-app/app.js
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

export const BackgroundDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  z-index: -2;
`;

export const Form = styled.form`
  border: 3px solid black;
  width: 65vw;
  margin: auto;
  padding: 3em;
  background-image: url("../../../assets/lucas-benjamin-729304-unsplash.jpg");
  border-radius: 20px;
  z-index: 5;
`;

export const P  = styled.p`
  font-size: 2em;
  background-color: lightgray;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid black;
`;

export const Input = styled.input`
  display: inline-block;
  color: purple;
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  border: none;
  width: 55vw;
  margin: auto;
  margin-left: 20px;

  :hover {
    background-color: orange;
  }
`;

export const TrackerSelect = styled.select`
  color: purple;
  display: inline-block;
  margin-left: 100px;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: lightgray;

  :hover {
    background-color: orange;
  }
`;

export const TrackerSpan = styled.span`
  font-size: .5em;
  color: purple;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: lightgray;
  padding: 10px;
  float: right;
  margin: 5px;
`;

export const ImageStripe = styled.div`
  background-image: url("../../../assets/glow-hexagon-black-orange-white-gradient-1920x1080-c4-000000-ffffff-ff8c00-000000-l2-16-203-a-25-f-6.png");
  background-position: center;
  color: black;
  height: 25vh;
  position: fixed;
  top: 40vh;
  z-index: 1;
  width: 100vw;
  background-color: black;
`;

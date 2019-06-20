import styled from 'styled-components';

export const BackgroundDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  padding-bottom: 5rem;

  background-color: gainsboro;
`;

export const Form = styled.form`
  border: 3px solid black;
  width: 45vw;
  margin: auto;
  padding: 3em;
  background-image: url("../../../assets/lucas-benjamin-729304-unsplash.jpg");
  border-radius: 20px;
  z-index: 5;
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const H5 = styled.h5`
  font-size: 1.5em;
  text-align: center;
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
  font-size: .7em;
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  border: none;
  width: 30vw;
  margin: auto;
  margin-left: 20px;

  :hover {
    background-color: orange;
  }
`;

export const DescriptionTextarea = styled.textarea`
  display: inline-block;
  color: purple;
  font-size: .7em;
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  border: none;
  width: 35vw;
  margin: auto;
  margin-left: 20px;
  height: 7em;

  :hover {
    background-color: orange;
  }
`;

export const TextArea = styled.textarea`
  display: inline-block;
  color: purple;
  font-size: .7em;
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  border: none;
  width: 50vw;
  margin: auto;
  margin-left: 20px;

  :hover {
    background-color: orange;
  }
`;

export const TrackerSelect = styled.select`
  color: purple;
  font-size: .7em;
  display: inline-block;
  margin-left: 1.5rem;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: lightgray;

  :hover {
    background-color: orange;
  }
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
  width: 80vw;
  height: 25vh;
  position: fixed;
  top: 40vh;
  z-index: 1;
  background-color: black;
`;

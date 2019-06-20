import styled from 'styled-components';


export const Form = styled.form`
  border: 3px solid black;
  width: 25vw;
  margin: auto;
  padding: 3em;
  background-image: url("../../../assets/lucas-benjamin-729304-unsplash.jpg");
  border-radius: 20px;
  z-index: 5;
  margin-right: 3em;
  /* display: flex; */
`;

export const P  = styled.p`
  display: inline-block;
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
  width: 20vw;
  margin: auto;
  margin-left: 20px;

  :hover {
    background-color: orange;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 2em;
`;

export const TextArea = styled.textarea`
  display: inline-block;
  color: purple;
  font-size: .7em;
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  border: none;
  width: 20vw;
  margin: auto;
  margin-left: 20px;

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

export const AddNotesDiv = styled.div`
  border: 3px solid black;
  width: 25vw;
  margin: auto;
  margin-right: 3em;
  margin-top: 5em;
  padding: 3em;
  background-image: url("../../../assets/lucas-benjamin-729304-unsplash.jpg");
  border-radius: 20px;
  z-index: 5;
  display: flex;
`;

export const NoteDiv = styled.div`
  border: 2px solid black;
  background: lightgray;
  border: 3px solid black;
  border-radius: 20px;
  min-height: 5em;
  /* margin: 5px;
  padding: 4px; */
`;

export const NoteUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

import styled from 'styled-components';


export const NoteFormCSS = styled.form`
  border: .1rem solid black;
  width: 25vw;
  padding: 1em;
  background-image: url("../../../assets/concrete.jpg");
  border-radius: 20px;
  margin-right: 3em;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const P  = styled.p`
  font-size: 2em;
  background: white;
  opacity: .8;
  border-radius: .22rem;
  padding: 10px;
  margin: .5rem;
`;

export const Input = styled.input`
  font-size: .7em;
  border-radius: .22rem;
  background: transparent;
  border: none;
  width: 20vw;

  :hover {
    background: rgba(240, 240, 240, 0.838);
  }
`;

export const TextArea = styled.textarea`
  font-size: .7em;
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  border: none;
  width: 20vw;
  margin: auto;

  :hover {
    background-color: orange;
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  border-radius: 5px;
  background: white;
  margin: .5rem;
  padding: .7rem;
  width: 5rem;
`;

export const AddNotesDiv = styled.div`
  border: .1rem solid black;
  width: 25vw;
  border-radius: 1.5rem;
  margin: .5rem;
  background-image: url("../../../assets/concrete1.jpg");
  z-index: 5;
  overflow: scroll;
  display: flex;
  justify-content: center;
`;

export const NoteUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  `;

export const H2 = styled.h2`
  color: white;
  text-align: center;
  font-size: 2em;
`;

export const NoteLi = styled.li`
  margin: .5rem 0;
  `;

export const NoteDiv = styled.div`
  width: 20vw;
  background: white;
  opacity: .8;
  border-radius: .22rem;
  min-height: 5em;
  margin: .5rem;
  
  h3, p {
    padding: .5rem;
  }
`;

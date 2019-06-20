import styled from 'styled-components';


export const NoteFormCSS = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-image: url("../../../assets/concrete1.jpg");
  width: 25vw;
  border: .1rem solid black;
  border-radius: .3rem;
  padding: 1em;
  margin: .5rem;
  margin-right: 3em;
`;

export const ScrollForm  = styled.div`
  height: 85%;
  width: 100%;
  overflow: scroll;
  margin-bottom: .3rem;
`;

export const P  = styled.p`
  font-size: 1.5em;
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
  width: 22vw;
  resize: vertical;
  margin: auto;

  :hover {
    background: rgba(240, 240, 240, 0.838);
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  border-radius: 5px;
  background: white;
  margin: .5rem;
  padding: .7rem;
  font-size: 1em;

  :hover {
    opacity: .7;
    transform: scale(1.01);
  }
`;

export const AddNotesDiv = styled.div`
  border: .1rem solid black;
  border-radius: .3rem;
  width: 25vw;
  height: 28vh;
  padding: 1em;
  margin: .5rem;
  background-image: url("../../../assets/concrete1.jpg");
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoteUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0rem;
  height: 100%;

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
  width: 24vw;
  background: white;
  opacity: .8;
  border-radius: .22rem;
  min-height: 5em;
  margin: .5rem;
  
  h3, p {
    padding: .5rem;
    flex-wrap: wrap;
  }
`;

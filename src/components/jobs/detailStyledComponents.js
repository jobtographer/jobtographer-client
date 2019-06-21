import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  `;

export const WhiteBackground = styled.div`
  background-image: url('../../../assets/white.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 25vw;
  height: 25%;
  transform: rotate(35deg) translate(-5rem);

  margin: 0;
  padding: 0;
  position: absolute;
  z-index: -101;
`;
export const OrangeBackground = styled.div`
  background-image: url('../../../assets/orange1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(110% 0, 100% 100%, 0% 100%, 0 160%);
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: -100;
`;

export const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Form = styled.form`
  background-image: url("../../../assets/concrete1.jpg");
  width: 35vw;
  height: 61vh;
  border-radius: .3rem;
  border: .1rem solid;
  margin: .5rem;
  padding: 3em;
`;

export const ScrollForm  = styled.div`
  height: 85%;
  width: 100%;
  overflow: scroll;
  margin-bottom: .3rem;
`;

export const H1 = styled.h1`
  text-align: center;
  color: white;
  `;

export const H5 = styled.h5`
  color: white;
  opacity: .8;
  font-size: 1em;
  text-align: center;
`;

export const P  = styled.p`
  background: white;
  opacity: .8;
  font-size: 1.5em;
  border-radius: .22rem;
  margin: .5rem;
  padding: 10px;
`;

export const Input = styled.input`
  display: inline-block;
  font-size: .7em;
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  border: none;
  width: 30vw;
  margin: auto;
  margin-left: 20px;

  :hover {
    background: rgba(240, 240, 240, 0.838);
  }
`;

export const DescriptionTextarea = styled.textarea`
  display: inline-block;
  font-size: .7em;
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  border: none;
  margin: auto;
  margin-left: 20px;
  height: 7em;
  width: 30vw;
  resize: vertical;

  :hover {
    background: rgba(240, 240, 240, 0.838);
  }
`;

export const TextArea = styled.textarea`
  display: inline-block;
  font-size: .7em;
  border-radius: 5px;
  padding: 10px;
  background: transparent;
  border: none;
  width: 50vw;
  margin: auto;
  margin-left: 20px;

  :hover {
    background: rgba(240, 240, 240, 0.838);
  }
`;

export const TrackerSelect = styled.select`
  font-size: .7em;
  display: inline-block;
  margin-left: 1.5rem;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  background: lightgray;

  :hover {
    background: rgba(240, 240, 240, 0.838);
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  background: white;
  padding: 10px;
  float: right;
  font-size: 1em;
  margin: 5px;
  padding: 1rem;

  :hover {
    opacity: .7;
    transform: scale(1.01);
  }
`;

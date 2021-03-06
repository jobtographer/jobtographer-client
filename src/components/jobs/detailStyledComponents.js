import styled from 'styled-components';
import white1 from '../../../assets/white.jpg';
import white2 from '../../../assets/white.png';
import orange1 from '../../../assets/orange1.jpg';
import concrete1 from '../../../assets/concrete1.jpg';

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  `;

export const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${white1});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -107;
`;

export const WhiteBackground = styled.div`
  background-image: url(${white2});
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
  background-image: url(${orange1});
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
  background-image: url(${concrete1});
  width: 35vw;
  height: 60.5vh;
  border-radius: .3rem;
  border: .1rem solid;
  margin: .5rem;
  padding: 3em;
`;

export const ScrollForm  = styled.div`
  height: 82.8%;
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

export const LoadSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  img {
    width: 13rem;
  }
  animation: spin 2s linear infinite;

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
`;

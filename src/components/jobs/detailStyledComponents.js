import styled from 'styled-components';

export const PageContainer = styled.div`
  background-image: url('../../../assets/orange1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;

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
  overflow: scroll;
  border-radius: 20px;
  border: .1rem solid;
  margin: .5rem;
  padding: 3em;
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
  background-color: white;
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
    background-color: orange;
  }
`;

export const DescriptionTextarea = styled.textarea`
  display: inline-block;
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
  background: white;
  padding: 10px;
  float: right;
  font-size: 1em;
  margin: 5px;
  padding: 1rem;
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

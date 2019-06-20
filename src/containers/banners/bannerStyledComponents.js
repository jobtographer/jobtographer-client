import styled from 'styled-components';

export const GeneralNavBar = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2em;
  color: white;
   a {
    color: white;
    font-size: .5em;
    text-decoration: none;
  }

  img {
    border: solid orange .25rem;
    width: 150px;
    height: auto;
    border-radius: 50%;
    margin-right: 50px;
  }
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

export const Li1 = styled.li`
  margin: 1rem;
  margin-left: 50px;
  p {
    color: white;
  }
  a:hover {
    color: white;
  }
  `;

export const Li2 = styled.li`
  margin: 1rem;
  margin-left: 50px;
  color: white;
  p {
    color: white;
  }
  a:hover {
    color: white;
  }
`;

export const UserNavBar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background: black;
  clip-path: polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%);
  width: 4rem;
  height: 50vh;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    margin-top: 6rem;
  }
  a {
    color: white;
    margin-bottom: 1rem;
    text-decoration: none;
    :hover { color: red; }
  }	
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  font-size: 1.25em;
  width: 100vw;
  height: .45rem;
  padding: 1.25rem;
  z-index: 6;
`;
